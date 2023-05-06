import { instance } from '../resources/axios'

const exchangeRatesBaseURL = 'https://api.apilayer.com/exchangerates_data'

export type ExchangeRates = {
	base: string
	start_date: string
	end_date: string
	success: boolean
	fluctuation: boolean
	rates: {
		[currency: string]: {
			start_rate: number
			end_rate: number
			change: number
			change_pct: number
		}
	}
}

const getISODate = (date) => {
	return date.toISOString().split('T')[0]
}

export const getLatest = async (base, currencies): Promise<ExchangeRates|undefined> => {
	try {
		const today = new Date()
		const yesterday = new Date(today)
		yesterday.setDate(yesterday.getDate() - 1)

		const response = await instance.get<ExchangeRates>(`${exchangeRatesBaseURL}/fluctuation?start_date=${getISODate(yesterday)}&end_date=${getISODate(today)}&symbols=${currencies.join(',')}&base=${base}`)
		if(response) {
			return response.data
		}
	} catch(error) {
		console.log('Error getting latest rates', error)
	}
}