import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

// Types
import { Dispatch, SetStateAction } from 'react'

export const CompareYields = ({ annualPercent, deposit, setDeposit, maxAmount }: IProps) => {
	return (
		<input
			css={css`
				/* Applying base CSS styles. ======================================================= */
				width: 100%; /* Specific width is required for Firefox. */
				margin-bottom: 10px;
				margin-top: 22px;
				@-moz-document url-prefix() {
					margin-top: 15px;
				}
				-webkit-appearance: none; /* Hides the slider so that custom slider can be made. */
				background: transparent; /* Otherwise white in Chrome. */

				margin-top: 22px;
				@-moz-document url-prefix() {
					margin-top: 15px;
				}

				&::-webkit-slider-thumb {
					-webkit-appearance: none;
				}
				&:focus {
					outline: none; /* Removes the blue border. */
				}
				&::-ms-track {
					width: 100%;
					/* Hides the slider so custom styles can be added */
					background: transparent;
					border-color: transparent;
					color: transparent;
					cursor: pointer;
				}

				/* Styling the Thumb. ======================================================= */
				/* Special styling for WebKit/Blink. */
				&::-webkit-slider-thumb {
					height: 25px;
					width: 25px;
					background: white;
					border: 3px solid ${Color.Violet21};
					border-radius: 50%;
					cursor: pointer;
					-webkit-appearance: none;
					margin-top: -12px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
				}
				/* All the same stuff for Firefox. */
				&::-moz-range-thumb {
					height: 25px;
					width: 25px;
					background: white;
					border: 3px solid ${Color.Violet21};
					border-radius: 50%;
					cursor: pointer;
				}
				/* All the same stuff for IE. */
				&::-ms-thumb {
					height: 25px;
					width: 25px;
					background: white;
					border: 3px solid ${Color.Violet21};
					border-radius: 50%;
					cursor: pointer;
				}

				/* Styling the Track. ======================================================= */
				&::-webkit-slider-runnable-track {
					width: 100%;
					height: 3px;
					background: ${Color.Violet21};
					border-radius: 1.5px;
					cursor: pointer;
				}

				&:focus::-webkit-slider-runnable-track {
					background: ${Color.Violet21};
				}

				&::-moz-range-track {
					width: 100%;
					background: ${Color.Violet21};
					border-radius: 1.5px;
					cursor: pointer;
				}

				&::-ms-track {
					width: 100%;
					background: transparent;
					border-color: transparent;
					color: transparent;
					cursor: pointer;
				}
				&::-ms-fill-lower {
					background: ${Color.Violet21};
					border: none;
					border-radius: 1.5px;
				}
				&:focus::-ms-fill-lower {
					background: ${Color.Violet21};
				}
				&::-ms-fill-upper {
					background: ${Color.Violet21};
					border: none;
					border-radius: 1.5px;
				}
				&:focus::-ms-fill-upper {
					background: ${Color.Violet21};
				}
			`}
			max={maxAmount}
			min="500"
			onChange={(e) => setDeposit(+e.target.value)}
			step="100"
			type="range"
			value={deposit}
		/>
	)
}

interface IProps {
	annualPercent: number
	deposit: number
	setDeposit: Dispatch<SetStateAction<number>>
	maxAmount: number
}
