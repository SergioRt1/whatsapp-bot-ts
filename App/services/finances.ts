import { getString, saveString } from '../repositories/dbStorage'
import { ExchangeRates, getLatest } from '../repositories/finances'

const currencies = ['COP', 'MXN']
const base = 'USD'
const previousInfoID = 'financesInformationID'

export const getFinancialInfo = async() => {
	const financeInfo = await calculateFinanceInfo()

	if(financeInfo) {
		const previous = JSON.parse(await getString(previousInfoID))
		await saveString(previousInfoID, JSON.stringify(financeInfo))

		return buildMessage(financeInfo, previous)
	}
}

const buildMessage = ({ base, rates }, previous: ExchangeRates|undefined) => {
	return Object.keys(rates).map(symbol => `TRM ${base}->${symbol} *${rates[symbol].toFixed(2)}*${getDelta(rates[symbol], previous?.rates[symbol])}`).join('\n')
}

const getDelta = (rate: number, previousRate: number|undefined): string => {
	if(previousRate === undefined) {
		return ''
	}

	const trend = previousRate === rate ? '🟰'
		: previousRate > rate ? '📉' : '📈'

	return ` (${(rate - previousRate).toFixed(3)}) ${trend}`
}

const calculateFinanceInfo = async() => {
	return await getLatest(base, currencies)
}