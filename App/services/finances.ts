import { fetchUSDtoCOPConv } from '../repositories/finances'

export const getFinancialInfo = async() => {
	const financeInfo = await calculateFinanceInfo()
	if(financeInfo) {
		return buildMessage(financeInfo)
	}
}

const buildMessage = ({ current }) => {
	return `TRM USD->COP *${current.toFixed(2)}*`
}

const calculateFinanceInfo = async() => {
	const data = await fetchUSDtoCOPConv()
	if(data) {
		const avg = data.reduce((acc, curr) => acc + parseFloat(curr[1]), 0) / data.length
		const current = parseFloat(data[data.length - 1][1])

		return { avg, current }
	}
}