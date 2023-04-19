import express, { Express, Request, Response } from 'express'
import { startSock } from './api/whatsApp'
import { sendMessage } from './services/whatsApp'

require('dotenv').config()

const PORT = process.env.PORT || 3000

const init = async() => {
	const app: Express = express()

	const sock = await startSock()

	app.get('/api/sendText', async(req: Request, res: Response) => {
		const groupName = req.query.group || process.env.GROUP_NAME || 'bas'

		const response = await sendMessage(groupName, sock)
		if(response && response.status !== 0) {
			res.send('Message sent')
		} else {
			res.send('Message failed to send')
		}
	})

	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`)
	})
}

init()
