import { fetchUSDtoCOPConv, getLatest } from '../repositories/finances'

const currencies = ['COP', 'MXN']
const base = 'USD'

export const getFinancialInfo = async() => {
	const financeInfo = await calculateFinanceInfo()
	if(financeInfo) {
		return buildMessage(financeInfo)
	}
}

const buildMessage = ({ base, rates }) => {
	return Object.keys(rates).map(symbol => `TRM ${base}->${symbol} *${rates[symbol]}*`).join('\n')
}

const calculateFinanceInfo = async() => {
	return await getLatest(base, currencies)
}