import styled from '@emotion/styled'

// Styles
import { Color } from '#styles/index'

export const AmountYouWillEarnPerYearBar = styled.div<IProps>`
	height: 17px;
	/**
	 * [+ 20px] makes bar to look correctly for low deposit values.
	 * [100% - 72px] - this way we get length of the input, so we can
	 * calc length of the bar depending on the input length.
	 * [* 0.92] reduces effect of [+ 20px] which we added for low deposit values,
	 * so the bar length looks correct for high deposit values.
	 **/
	width: calc(
		20px + (100% - 72px) * ${({ amountYouWillEarn }) => amountYouWillEarn * 0.95} /
			${({ maxAmount }) => maxAmount}
	);
	background-color: ${Color.Violet21};
	border-radius: 8px;
	transition: width 0.4s ease-in;
`

interface IProps {
	amountYouWillEarn: number
	maxAmount: number
}
