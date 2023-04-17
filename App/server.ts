import express, { Express, Request, Response } from 'express'
import { startSock } from './api/whatsApp'
import { sendMessage } from './services/whatsApp'

require('dotenv').config()

const PORT = process.env.PORT || 3000

const init = async() => {
	const app: Express = express()

	const sock = await startSock()

	app.get('/api/sendText', async(req: Request, res: Response) => {
		const groupName = process.env.GROUP_NAME || 'bas'
		sendMessage(groupName, sock)
		res.send('Hola, mundo!')
	})

	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`)
	})
}

init()
