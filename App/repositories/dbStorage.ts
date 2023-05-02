import { deleteDocument, getDocument, putDocument } from '../resources/dynamoDB'


export const saveAsJSON = async(id: string, data: any) => {
	const json = JSON.stringify(data)
	await putDocument(id, json)
}

export const saveString = async(id: string, data: string) => {
	await putDocument(id, data)
}


export const removeById = async(id: string) => {
	await deleteDocument(id)
}

export const getString = async(id: string): Promise<string> => {
	return await getDocument(id)
}