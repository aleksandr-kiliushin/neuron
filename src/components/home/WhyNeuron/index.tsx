import { css } from '@emotion/react'

// Components
import { DistributionCard } from './DistributionCard'
import { OptionPoolsCard } from './OptionPoolsCard'
import { SecurityCard } from './SecurityCard'
import { SingleAssetsCard } from './SingleAssetsCard'

// Assets
import aaveLogoSvg from '#assets/aave-logo.svg'

export const WhyNeuron = () => {
	const marketUsdcYields = [
		{ logo: aaveLogoSvg, percent: 8.49 },
		{ logo: aaveLogoSvg, percent: 8.49 },
		{ logo: aaveLogoSvg, percent: 8.49 },
		{ logo: aaveLogoSvg, percent: 8.49 },
	]

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				row-gap: 50px;
				height: 890px;
				padding: 95px 70px;
			`}
		>
			<h2
				css={css`
					color: white;
					text-align: center;
				`}
			>
				Why Neuron fund?
			</h2>

			<div
				css={css`
					display: grid;
					grid-template-areas:
						'distribution option-pools security'
						'distribution option-pools single-assets';
					grid-template-columns: 12fr 18fr 20fr;
					gap: 28px;
					height: 584px;
				`}
			>
				<DistributionCard />
				<OptionPoolsCard marketUsdcYields={marketUsdcYields} />
				<SecurityCard />
				<SingleAssetsCard />
			</div>
		</div>
	)
}
