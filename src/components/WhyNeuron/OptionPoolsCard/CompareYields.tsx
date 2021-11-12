import { useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

// Assets
import logo3Svg from '#assets/logo-3.svg'

export const CompareYields = () => {
	const [deposit, setDeposit] = useState(1000)

	const maxAmount = 100_000
	const annualPercent = 8.49
	const amountYouWillEarn = Math.ceil(deposit * (1 + annualPercent / 100))

	return (
		<div>
			<h4
				css={css`
					margin-bottom: 13px;
					color: white;
				`}
			>
				Compare Neuron USDC Yields
			</h4>

			<div
				css={css`
					color: ${Color.Violet20};
					font-size: 14px;
					font-weight: 600;
					line-height: 19px;
				`}
			>
				Your deposit
			</div>

			<div
				css={css`
					position: relative;
					display: grid;
					grid-template-columns: 1fr 45px;
					column-gap: 27px;
					margin-bottom: 24px;
				`}
			>
				<div>
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

					<div
						css={css`
							position: absolute;
							top: 40px;
							color: white;
							font-size: 18px;
							font-weight: 600;
							line-height: 22px;
						`}
					>
						${deposit}
					</div>
				</div>

				<div
					css={css`
						display: flex;
						flex-direction: column;
						row-gap: 6px;
					`}
				>
					<Image alt="" src={logo3Svg} />
					<div
						css={css`
							color: white;
							font-size: 18px;
							font-weight: 600;
							line-height: 22px;
						`}
					>
						{annualPercent}%
					</div>
				</div>
			</div>

			<div
				css={css`
					display: flex;
					flex-direction: column;
					row-gap: 12px;
				`}
			>
				<div
					css={css`
						color: ${Color.Violet20};
						font-size: 14px;
						font-weight: 600;
						line-height: 19px;
					`}
				>
					You will earn per 1 year
				</div>

				<div
					css={css`
						height: 17px;
						/**
						 * [+ 25px] makes bar for deposit values.
						 * [100% - 72px] - this way we get length of the input, so we can
						 * calc length of the bar depending on the input length.
						 * [* 0.9] reduces effect of [+ 20px] which we added for low deposit values,
						 * so the bar length looks correct for high deposit values.
						 **/
						width: calc(25px + (100% - 72px) * ${amountYouWillEarn * 0.9} / ${maxAmount});
						background-color: ${Color.Violet21};
						border-radius: 8px;
					`}
				/>

				<div
					css={css`
						color: white;
						font-size: 18px;
						font-weight: 600;
						line-height: 22px;
					`}
				>
					${amountYouWillEarn}
				</div>
			</div>
		</div>
	)
}