import { useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { InputRange } from './InputRange'
import { AmountYouWillEarnPerYearBar } from './AmountYouWillEarnPerYearBar'

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
			<h4 css={{ marginBottom: '13px', color: 'white' }}>Compare Neuron USDC Yields</h4>

			<div css={{ color: Color.Violet20, fontSize: '14px', fontWeight: 600, lineHeight: '19px' }}>
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
					<InputRange deposit={deposit} maxAmount={maxAmount} setDeposit={setDeposit} />

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

				<div css={{ display: 'flex', flexDirection: 'column', rowGap: '6px' }}>
					<Image alt="" src={logo3Svg} />
					<div css={{ color: 'white', fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>
						{annualPercent}%
					</div>
				</div>
			</div>

			<div css={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
				<div css={{ color: Color.Violet20, fontSize: '14px', fontWeight: 600, lineHeight: '19px' }}>
					You will earn per 1 year
				</div>

				<AmountYouWillEarnPerYearBar amountYouWillEarn={amountYouWillEarn} maxAmount={maxAmount} />

				<div css={{ color: 'white', fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>
					${amountYouWillEarn}
				</div>
			</div>
		</div>
	)
}
