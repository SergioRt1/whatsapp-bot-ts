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

const getDate = (date) => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1 // Months are zero-based
	const day = date.getDate()
	return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
}

export const getLatest = async(base, currencies): Promise<ExchangeRates|undefined> => {
	try {
		const today = new Date()
		today.setDate(today.getDate() - 1)
		const yesterday = new Date(today)
		yesterday.setDate(yesterday.getDate() - 1)

		const response = await instance.get<ExchangeRates>(`${exchangeRatesBaseURL}/fluctuation?start_date=${getDate(yesterday)}&end_date=${getDate(today)}&symbols=${currencies.join(',')}&base=${base}`)
		if(response) {
			return response.data
		}
	} catch(error) {
		console.log('Error getting latest rates', error)
	}
}