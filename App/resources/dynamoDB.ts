import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { PutCommand, GetCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb'

const TABLE_NAME = process.env.DYNAMODB_TABLE!
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
		if(data.$metadata.httpStatusCode === 200) {
			console.log(`Put item with ID ${id}`)
		} else {
			console.error('Unable to put item:', data)
		}
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
		const data = await dynamoDB.send(new GetCommand(params))
		if(data.$metadata.httpStatusCode === 200 && data.Item?.data) {
			return data.Item.data
		} else {
			console.error('Item not found')
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
		const response = await dynamoDB.send(new DeleteCommand(params))
		if(response.$metadata.httpStatusCode === 200) {
			console.log(`Deleted item with ID ${id}`)
		} else {
			console.error('Unable to delete item:', response)
		}
	} catch(err) {
		console.error('Unable to delete item:', err)
	}
}