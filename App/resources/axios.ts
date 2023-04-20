import axios from 'axios'
import crypto from 'crypto'
import * as https from 'https'

const httpsAgent = new https.Agent({
	// for self signed you could also add
	// rejectUnauthorized: false,

	// allow legacy server
	secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
})

export const instance = axios.create({ httpsAgent })