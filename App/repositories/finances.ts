import { instance } from '../resources/axios'

const exchangeRatesBaseURL = 'https://api.apilayer.com/exchangerates_data'

export type ExchangeRates = {
	base: string
	success: boolean
	date: string
	rates: {
		[currency: string]: number
	}
}

export const getLatest = async(base, currencies): Promise<ExchangeRates|undefined> => {
	try {
		const response = await instance.get<ExchangeRates>(`${exchangeRatesBaseURL}/latest?symbols=${currencies.join(',')}&base=${base}`)
		if(response) {
			return response.data
		}
	} catch(error) {
		console.log('Error getting latest rates', error)
	}
}