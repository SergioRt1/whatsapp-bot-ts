import { instance } from '../resources/axios'


const DOLLAR_URL = 'https://totoro.banrep.gov.co/estadisticas-economicas/rest/consultaDatosService/consultaMercadoCambiario'

type FinancialResponse = [ [string, string] ]

export const fetchUSDtoCOPConv = async() => {
	try {
		const response = await instance.get<FinancialResponse>(DOLLAR_URL)

		return response.data
	} catch(error) {
		console.log('Error getting dollar url:', error)
	}
}