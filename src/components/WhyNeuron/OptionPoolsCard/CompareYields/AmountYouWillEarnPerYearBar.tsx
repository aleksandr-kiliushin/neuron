import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/index'

export const AmountYouWillEarnPerYearBar = ({ amountYouWillEarn, deposit, maxAmount }: IProps) => {
	// To calculate bar length.
	const lengthCoef = amountYouWillEarn / maxAmount

	// Additional length makes bar to look correctly for very low and very hight deposit values.
	const additionalLength = 15 * (1 - deposit / maxAmount)

	return (
		<div
			css={css`
				height: 17px;
				// 72px is bar right padding.
				width: calc((100% - 72px) * ${lengthCoef} + ${additionalLength}px);
				background-color: ${Color.Violet21};
				border-radius: 8px;
				transition: width 0.4s ease-in;
			`}
		/>
	)
}

interface IProps {
	amountYouWillEarn: number
	deposit: number
	maxAmount: number
}
