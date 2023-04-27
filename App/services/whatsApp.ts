import { getFinancialInfo } from './finances'
import { GroupMetadata } from '../../src'

export const sendMessage = async(contactName: string, sock) => {
	const groups = await sock.groupFetchAllParticipating()
	const contactId = findContactID(contactName, groups)
	const message = await getMessage()

	if(contactId !== undefined && message !== undefined) {
		return await sock.sendMessage(contactId, message)
	}
}

const getMessage = async() => {
	const message = await getFinancialInfo()
	if(message) {
		return {
			text: `Bot: ${message}`,
		}
	}
}

const findContactID = (contactName: string, groups: { [p: string]: GroupMetadata }): string | undefined => {
	const contacts = searchForContact(contactName, groups)
	if(contacts.length > 0) {
		console.log('Found contacts:', contacts, 'of:', contactName)
		return contacts[0].id
	}
}

const searchForContact = (inputWord: string, groups: { [p: string]: GroupMetadata }): SearchResult[] => {
	const matchingContacts: SearchResult[] = []

	for(const id in groups) {
		const name = groups[id].subject
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
