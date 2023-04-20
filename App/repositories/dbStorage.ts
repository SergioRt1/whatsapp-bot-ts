import { AuthenticationCreds } from '../../src'
import { deleteDocument, getDocument, putDocument } from '../resources/dynamoDB'

const CREDS_ID = 'creds'


export const saveCreds = async(creds: AuthenticationCreds) => {
	const data = JSON.stringify(creds)
	await putDocument(CREDS_ID, data)
}

export const removeCreds = async() => {
	await deleteDocument(CREDS_ID)
}


export const getCreds = async(): Promise<AuthenticationCreds> => {
	return await getDocument(CREDS_ID)
}