import { fetchUSDtoCOPConv } from '../repositories/finances'

const DOLLAR_INFO_URL = 'https://www.banrep.gov.co/es/estadisticas/comportamiento-del-mercado-del-dolar-durante-el-dia-informacion-tiempo-real'

export const getFinancialInfo = async() => {
	const financeInfo = await calculateFinanceInfo()
	if(financeInfo) {
		return buildMessage(financeInfo)
	}
}

const buildMessage = ({ TRM, avg20Days, devaluation }) => {
	return 'La ultima tasa de cambio USD a COP es: ' + TRM + '. El promedio de cambio en los ultimos 20 dias es: ' + avg20Days + '. La devaluacion año completo es: ' + devaluation + '. Mas info en' + DOLLAR_INFO_URL
}

const calculateFinanceInfo = async() => {
	const data = await fetchUSDtoCOPConv()
	if(data && data.length > 3) {
		const TRM = data[0][1]
		// @ts-ignore
		const avg20Days = data[1][1]
		// @ts-ignore
		const devaluation = data[2][1]
		return { TRM, avg20Days, devaluation }
	}
}