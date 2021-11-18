import { css } from '@emotion/react'

// Components
import { Card } from '../Card'
import { CompareYields } from './CompareYields'
import { MarketUsdcYields } from './MarketUsdcYields'
import { CardText } from '../CardText'

// Styles
import { mqMobile } from '#styles/index'

// Assets
import aaveLogoSvg from '#assets/aave-logo.svg'

export const OptionPoolsCard = () => {
	const marketUsdcYields = [
		{ logo: aaveLogoSvg, percent: 8.49 },
		{ logo: aaveLogoSvg, percent: 8.49 },
		{ logo: aaveLogoSvg, percent: 8.49 },
		{ logo: aaveLogoSvg, percent: 8.49 },
	]

	return (
		<Card
			css={css`
				grid-area: option-pools;
				display: grid;
				grid-template-tows: 3fr 1fr;
				${mqMobile} {
					grid-template-tows: intial;
				}
			`}
		>
			<div
				css={css`
					padding: 45px 40px;
					${mqMobile} {
						padding: 40px 32px;
					}
				`}
			>
				<h3
					css={css`
						margin-bottom: 17px;
						${mqMobile} {
							font-size: 18px;
							line-height: 22px;
							text-align: initial;
						}
					`}
				>
					Option pools
				</h3>

				<CardText
					css={css`
						max-width: 310px;
						margin-bottom: 14px;
						${mqMobile} {
							font-size: 16px;
							line-height: 19px;
							margin-bottom: 0;
						}
					`}
				>
					Option trading strategies tuned to earn an additional yield automatically on assets you
					are bullish &#128640;
				</CardText>

				<CompareYields />
			</div>

			<MarketUsdcYields marketUsdcYields={marketUsdcYields} />
		</Card>
	)
}
