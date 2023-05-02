import { getString, removeById, saveString } from '../../App/repositories/dbStorage'
import { proto } from '../../WAProto'
import { AuthenticationCreds, AuthenticationState, SignalDataTypeMap } from '../Types'
import { initAuthCreds } from './auth-utils'
import { BufferJSON } from './generics'

const CREDS_ID = process.env.CREDS_ID!

export const useExternalMultiFileAuthState = async(): Promise<{ state: AuthenticationState, removeData: () => Promise<void>, saveData: () => Promise<void> }> => {
	console.log('using external multi file auth state')
	const writeData = (data: any, file: string) => {
		return saveString(fixFileName(file)!, JSON.stringify(data, BufferJSON.replacer))
	}

	const readData = async(file: string) => {
		try {
			const data = await getString(fixFileName(file)!)
			return JSON.parse(data, BufferJSON.reviver)
		} catch(error) {
			return null
		}
	}

	const removeData = async(file: string) => {
		try {
			await removeById(fixFileName(file)!)
		} catch (error: any) {
			console.log('error removing data', error)
		}
	}

	const fixFileName = (file?: string) => file?.replace(/\//g, '__')?.replace(/:/g, '-')

	const creds: AuthenticationCreds = await readData(CREDS_ID) || initAuthCreds()

	return {
		state: {
			creds,
			keys: {
				get: async(type, ids) => {
					const data: { [_: string]: SignalDataTypeMap[typeof type] } = { }
					await Promise.all(
						ids.map(
							async id => {
								let value = await readData(`${type}-${id}.json`)
								if(type === 'app-state-sync-key' && value) {
									value = proto.Message.AppStateSyncKeyData.fromObject(value)
								}

								data[id] = value
							}
						)
					)

					return data
				},
				set: async(data) => {
					const tasks: Promise<void>[] = []
					for(const category in data) {
						for(const id in data[category]) {
							const value = data[category][id]
							const file = `${category}-${id}.json`
							tasks.push(value ? writeData(value, file) : removeData(file))
						}
					}

					await Promise.all(tasks)
				}
			}
		},
		removeData:() => {
			return removeData(CREDS_ID)
		},
		saveData: () => {
			return writeData(creds, CREDS_ID)
		}
	}
}