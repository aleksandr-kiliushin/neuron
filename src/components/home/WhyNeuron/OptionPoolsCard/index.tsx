import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Card } from '../Card'
import { CompareYields } from './CompareYields'

// Styles
import { Color } from '#styles/constants'

export const OptionPoolsCard = ({ marketUsdcYields }: IProps) => {
	return (
		<Card
			css={css`
				grid-area: option-pools;
				display: grid;
				grid-template-rows: 3fr 1fr;
			`}
		>
			<div
				css={css`
					padding: 45px 40px;
				`}
			>
				<h3
					css={css`
						margin-bottom: 17px;
						color: white;
					`}
				>
					Option pools
				</h3>

				<div
					css={css`
						max-width: 310px;
						margin-bottom: 11px;
						color: white;
						font-size: 16px;
						line-height: 19px;
					`}
				>
					Option trading strategies tuned to earn an additional yield automatically on assets you
					are bullish &#128640;
				</div>

				<CompareYields />
			</div>

			<div
				css={css`
					padding: 18px 40px 28px;
					background-color: ${Color.Violet17};
					border-top: 1px solid ${Color.Violet11};
					border-radius: 0 0 8px 8px;
				`}
			>
				<div
					css={css`
						margin-bottom: 15px;
						color: ${Color.Violet18};
						font-size: 14px;
						line-height: 17px;
					`}
				>
					Market USDC Yelds
				</div>

				<div
					css={css`
						display: flex;
						column-gap: 21px;
					`}
				>
					{marketUsdcYields.map(({ logo, percent }, index) => (
						<div
							css={css`
								display: flex;
								flex-direction: column;
								align-items: start;
								row-gap: 8px;
							`}
							key={index}
						>
							<div
								css={css`
									padding-left: 3px;
								`}
							>
								<Image alt="" src={logo} />
							</div>
							<div
								css={css`
									color: ${Color.Violet19};
									font-size: 16px;
									line-height: 19px;
								`}
							>
								{percent}%
							</div>
						</div>
					))}
				</div>
			</div>
		</Card>
	)
}

interface IProps {
	marketUsdcYields: marketUsdcYieldsItem[]
}

interface marketUsdcYieldsItem {
	logo: string
	percent: number
}
