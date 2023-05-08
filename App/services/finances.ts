import { getLatest } from '../repositories/finances'

const currencies = ['COP', 'MXN']
const base = 'USD'

export const getFinancialInfo = async() => {
	const financeInfo = await calculateFinanceInfo()
	if(financeInfo) {
		return buildMessage(financeInfo)
	}
}

const buildMessage = ({ base, rates }) => {
	return Object.keys(rates).map(symbol => `TRM ${base}->${symbol} *${rates[symbol].end_rate.toFixed(2)}* ${getDelta(rates[symbol])}`).join('\n')
}

const getDelta = (rate): string => {
	const trend = rate.start_rate === rate.end_rate ? '🟰'
		: rate.start_rate > rate.end_rate ? '📉' : '📈'

	return `(${rate.change.toFixed(3)}) ${trend}`
}

const calculateFinanceInfo = async() => {
	return await getLatest(base, currencies)
}