// Components
import { Card } from '../Card'
import { CompareYields } from './CompareYields'
import { MarketUsdcYields } from './MarketUsdcYields'
import { CardText } from '../CardText'

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
		<Card css={{ gridArea: 'option-pools', display: 'grid', gridTemplateRows: '3fr 1fr' }}>
			<div css={{ padding: '45px 40px' }}>
				<h3 css={{ marginBottom: '17px' }}>Option pools</h3>

				<CardText css={{ maxWidth: '310px', marginBottom: '14px' }}>
					Option trading strategies tuned to earn an additional yield automatically on assets you
					are bullish &#128640;
				</CardText>

				<CompareYields />
			</div>

			<MarketUsdcYields marketUsdcYields={marketUsdcYields} />
		</Card>
	)
}
