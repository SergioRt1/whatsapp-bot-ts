import * as dotenv from 'dotenv'
dotenv.config()

import { startSock } from './api/whatsApp'
import { sendMessage } from './services/whatsApp'

const groupName = process.env.GROUP_NAME || 'bas'
const sockPromise = startSock()

const getWhatsApp = async() => {
	const sock = await sockPromise
	await sock.waitForConnectionUpdate((ev) => {
		return ev.isOnline || ev.connection === 'open'
	})
	return sock
}

// Run with: serverless invoke local --function cronHandler
module.exports.run = async() => {
	const whatsAppPromise = getWhatsApp()
	const response = await sendMessage(groupName, whatsAppPromise)

	if(response && response.status !== 0) {
		console.log('LogScheduledEvent')
	} else {
		console.log('Message failed to send')
	}
}
