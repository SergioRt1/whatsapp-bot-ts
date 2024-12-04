import { getString, saveString } from '../repositories/dbStorage'
import { ExchangeRates, getLatest } from '../repositories/finances'

const currencies = ['COP', 'MXN', 'EUR']
const base = 'USD'
const previousInfoID = 'financesInformationID'

type Conversion = {
	base: string
	to: string
	conversionFunc: (rates: Record<string, number>) => number;
}

// Maps a Symbol into a custom conversion
const customConversions: Record<string, Conversion> = {
    EUR: {
        base: 'EUR',
        to: 'COP',
        conversionFunc: (rates: Record<string, number>) => rates['COP'] / rates['EUR'],
    },
};

export const getFinancialInfo = async () => {
	const financeInfo = await calculateFinanceInfo()

	if (financeInfo) {
		const previous = JSON.parse(await getString(previousInfoID))
		await saveString(previousInfoID, JSON.stringify(financeInfo))

		return buildMessage(financeInfo, previous)
	}
}

const buildMessage = ({ base, rates }, previous: ExchangeRates | undefined) => {

	return Object.keys(rates).map(symbol => {
		let message: string
		if (symbol in customConversions) {
			const conversion = customConversions[symbol]
			const convertedRate = conversion.conversionFunc(rates)
			const previousRate = previous ? conversion.conversionFunc(previous.rates) : undefined

			message = `TRM ${conversion.base}->${conversion.to} *${convertedRate.toFixed(2)}*${getDelta(convertedRate, previousRate)}`
		} else {
			message = `TRM ${base}->${symbol} *${rates[symbol].toFixed(2)}*${getDelta(rates[symbol], previous?.rates[symbol])}`
		}
		return message
	}).join('\n')
}

const getDelta = (rate: number, previousRate: number | undefined): string => {
	if (previousRate === undefined) {
		return ''
	}

	const trend = previousRate === rate ? '🟰' : previousRate > rate ? '📉' : '📈'

	return ` (${(rate - previousRate).toFixed(3)}) ${trend}`
}

const calculateFinanceInfo = async () => {
	return await getLatest(base, currencies)
}