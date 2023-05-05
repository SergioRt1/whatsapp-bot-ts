import { instance } from '../resources/axios'


//v5kKCWJpl7UpT9NJmczFekgJA5H88LQO

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

const exchangeRatesBaseURL = 'https://api.apilayer.com/exchangerates_data'

export const getLatest = async (base, currencies) => {
	try {
		const response = await instance.get(`${exchangeRatesBaseURL}/latest?symbols=${currencies.join(',')}&base=${base}`)
		if(response) {
			return response.data
		}
		return {}
	} catch(error) {
		console.log('Error getting latest rates', error)
	}
}