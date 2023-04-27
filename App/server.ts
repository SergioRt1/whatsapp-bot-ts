import * as dotenv from 'dotenv'
import {startSock} from './api/whatsApp'
import {sendMessage} from './services/whatsApp'

dotenv.config()

const sock = startSock()

const getWhatsApp = async () => {
	return await sock
}

module.exports.run = async(event) => {
	const whatsApp = await getWhatsApp()
	console.log('Received event:', JSON.stringify(event, null, 2))

	const groupName = process.env.GROUP_NAME || 'bas'

	const response = await sendMessage(groupName, whatsApp)
	if(response && response.status !== 0) {
		console.log('LogScheduledEvent')
	} else {
		console.log('Message failed to send')
	}
}

