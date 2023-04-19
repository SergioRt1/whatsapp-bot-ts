import { Contact } from '../../src'
import { store } from '../api/whatsApp'
import { getFinancialInfo } from './finances'

export const sendMessage = async(contactName: string, sock) => {
	const contactId = findContactID(contactName)
	const message = await getMessage()

	if(contactId !== undefined && message !== undefined) {
		return await sock.sendMessage(contactId, message)
	}
}

const getMessage = async() => {
	const message = await getFinancialInfo()
	if(message) {
		return {
			text: message
		}
	}
}

const findContactID = (contactName: string): string | undefined => {
	if(store) {
		const contacts = searchForContact(contactName, store.contacts)
		if(contacts.length > 0) {
			console.log('Found contacts:', contacts, 'of:', contactName)
			return contacts[0].id
		}
	}
}

const searchForContact = (inputWord: string, contacts: { [_: string]: Contact }): SearchResult[] => {
	const matchingContacts: SearchResult[] = []

	for(const id in contacts) {
		const name = contacts[id].name
		const lowercaseWord = name?.toLowerCase()
		const lowercaseInputWord = inputWord.toLowerCase()

		if(name !== undefined && lowercaseWord?.includes(lowercaseInputWord)) {
			matchingContacts.push({ id, name })
		}
	}

	return matchingContacts
}

type SearchResult = {
	id: string
	name: string
}
