import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { PutCommand, GetCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb'

const TABLE_NAME = 'whats-app-bot-table'



const dynamoDB = new DynamoDBClient({ region: 'us-east-2' })

export const putDocument = async(id: string, data: string) => {
	const params = {
		TableName: TABLE_NAME,
		Item: {
			id: id ,
			data: data,
		},
	}

	try {
		const data = await dynamoDB.send(new PutCommand(params))
		console.log('Put item:', data)
	} catch(err) {
		console.error('Unable to put item:', err)
	}
}

export const getDocument = async(id: string) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id: id
		},
	}

	try {
		const data = await dynamoDB.send( new GetCommand(params))
		if(data.Item?.data.S) {
			return JSON.parse(data.Item.data.S)
		}
	} catch(err) {
		console.error('Unable to get item:', err)
	}

	return null
}

export const deleteDocument = async(id: string) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id: id,
		},
	}

	try {
		await dynamoDB.send(new DeleteCommand(params))
		console.log(`Deleted item with ID ${id}`)
	} catch(err) {
		console.error('Unable to delete item:', err)
	}
}