const question = {
	answer:
		'Yes! To democratize access to Ethereum 2.0 for users who are unable to invest 32 ETH (the fixed amount required by the network), Ankr staking introduces Micropools – a proprietary solution that enables you to start staking with as little as 0.5 ETH. Simply choose the amount you want to delegate, and the system will automatically assign it to the best providers.',
	// isOpened: false,
	question: 'Can I stake if I have less than 32 ETH?',
}

export const questionsData = Array.from({ length: 5 }, (_, index) => ({ ...question, id: index }))

export interface IQuestion {
	answer: string
	id: number
	question: string
}
