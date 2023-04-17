import type { Comparable } from '@adiwajshing/keyed-db/lib/Types'
import type { Logger } from 'pino'
import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { BaileysEventEmitter, Chat, ConnectionState, Contact, PresenceData } from '../Types'


export const waChatKey = (pin: boolean) => ({
	key: (c: Chat) => (pin ? (c.pinned ? '1' : '0') : '') + (c.archived ? '0' : '1') + (c.conversationTimestamp ? c.conversationTimestamp.toString(16).padStart(8, '0') : '') + c.id,
	compare: (k1: string, k2: string) => k2.localeCompare (k1)
})

export type BaileysInMemoryStoreConfig = {
	chatKey?: Comparable<Chat, string>
	logger?: Logger
}

export default (
	{ logger: _logger }: BaileysInMemoryStoreConfig
) => {
	const logger = _logger || DEFAULT_CONNECTION_CONFIG.logger.child({ stream: 'in-mem-store' })

	const contacts: { [_: string]: Contact } = { }
	const presences: { [id: string]: { [participant: string]: PresenceData } } = { }
	const state: ConnectionState = { connection: 'close' }

	const contactsUpsert = (newContacts: Contact[]) => {
		const oldContacts = new Set(Object.keys(contacts))
		for(const contact of newContacts) {
			oldContacts.delete(contact.id)
			contacts[contact.id] = Object.assign(
				contacts[contact.id] || {},
				contact
			)
		}

		return oldContacts
	}

	/**
	 * binds to a BaileysEventEmitter.
	 * It listens to all events and constructs a state that you can query accurate data from.
	 * Eg. can use the store to fetch chats, contacts, messages etc.
	 * @param ev typically the event emitter from the socket connection
	 */
	const bind = (ev: BaileysEventEmitter) => {
		ev.on('connection.update', update => {
			Object.assign(state, update)
		})

		ev.on('contacts.update', updates => {
			for(const update of updates) {
				if(contacts[update.id!]) {
					Object.assign(contacts[update.id!], update)
				} else {
					logger.debug({ update }, 'got update for non-existant contact')
				}
			}
		})
		ev.on('messaging-history.set', ({
											contacts: newContacts,
										}) => {
			const oldContacts = contactsUpsert(newContacts)
			for(const jid of oldContacts) {
				delete contacts[jid]
			}

			logger.debug({ deletedContacts: oldContacts.size, newContacts }, 'synced contacts')
		})
	}

	const toJSON = () => ({
		contacts,
	})

	const fromJSON = (json: { contacts: { [id: string]: Contact } }) => {
		contactsUpsert(Object.values(json.contacts))
	}


	return {
		contacts,
		state,
		presences,
		bind,
		toJSON,
		fromJSON,
		writeToFile: (path: string) => {
			// require fs here so that in case "fs" is not available -- the app does not crash
			const { writeFileSync } = require('fs')
			writeFileSync(path, JSON.stringify(toJSON()))
		},
		readFromFile: (path: string) => {
			// require fs here so that in case "fs" is not available -- the app does not crash
			const { readFileSync, existsSync } = require('fs')
			if(existsSync(path)) {
				logger.debug({ path }, 'reading from file')
				const jsonStr = readFileSync(path, { encoding: 'utf-8' })
				const json = JSON.parse(jsonStr)
				fromJSON(json)
			}
		}
	}
}
