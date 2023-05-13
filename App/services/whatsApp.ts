import { GroupMetadata } from '../../src'
import { getFinancialInfo } from './finances'

export const sendMessage = async(contactName: string, whatsAppPromise) => {
	const messagePromise = getMessage()
	const whatsApp = await whatsAppPromise

	const groups = await whatsApp.groupFetchAllParticipating()
	const contactId = findContactID(contactName, groups)
	const message = await messagePromise

	console.log('Sending message:', message, 'to:', contactName, 'from:', contactName)

	if(contactId !== undefined && message !== undefined) {
		return await whatsApp.sendMessage(contactId, message)
	}
}

const getMessage = async() => {
	const message = await getFinancialInfo()
	if(message) {
		return {
			text: message,
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
