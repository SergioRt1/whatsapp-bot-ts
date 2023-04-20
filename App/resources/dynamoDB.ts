import { DynamoDB } from '@aws-sdk/client-dynamodb'

const TABLE_NAME = 'whats-app-bot-table'


const initDB = async() => {
	if(process.env.EXTERNAL_AUTH_ENABLED === 'true') {
		const dynamoDB = new DynamoDB({
			region: process.env.AWS_REGION || 'us-east-1',
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID || '<your-access-key-id>',
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '<your-secret-access-key>',
			},
		})
		await createTable(dynamoDB)

		return dynamoDB
	}
}

const DB = initDB()

const getDBInstance = async() => {
	const instance = await DB
	if(instance) {
		return instance
	} else {
		throw new Error('Trying to use DynamoDB without external auth enabled')
	}
}

const createTable = async(dynamoDB: DynamoDB) => {
	const params = {
		TableName: TABLE_NAME,
		KeySchema: [
			{ AttributeName: 'id', KeyType: 'HASH' },
		],
		AttributeDefinitions: [
			{ AttributeName: 'id', AttributeType: 'S' }, // S = string
		],
		ProvisionedThroughput: {
			ReadCapacityUnits: 1,
			WriteCapacityUnits: 1,
		},
	}

	return await dynamoDB.createTable(params)

}

export const putDocument = async(id: string, data: string) => {
	const dynamoDB = await getDBInstance()
	const params = {
		TableName: TABLE_NAME,
		Item: {
			id: { S: id },
			data: { S: data },
		},
	}

	try {
		const data = await dynamoDB.putItem(params)
		console.log('Put item:', data)
	} catch(err) {
		console.error('Unable to put item:', err)
	}
}

export const getDocument = async(id: string) => {
	const dynamoDB = await getDBInstance()
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id: { S: id },
		},
	}

	try {
		const data = await dynamoDB.getItem(params)
		if(data.Item?.data.S) {
			return JSON.parse(data.Item.data.S)
		}
	} catch(err) {
		console.error('Unable to get item:', err)
	}

	return null
}

export const deleteDocument = async(id: string) => {
	const dynamoDB = await getDBInstance()
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id: { S: id },
		},
	}

	try {
		await dynamoDB.deleteItem(params)
		console.log(`Deleted item with ID ${id}`)
	} catch(err) {
		console.error('Unable to delete item:', err)
	}
}