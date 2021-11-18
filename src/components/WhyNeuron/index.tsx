import { css } from '@emotion/react'

// Components
import { DistributionCard } from './DistributionCard'
import { OptionPoolsCard } from './OptionPoolsCard'
import { SecurityCard } from './SecurityCard'
import { SingleAssetsCard } from './SingleAssetsCard'
import { AuditPassed } from './AuditPassed'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

export const WhyNeuron = () => {
	const isMobile = useIsMobile()

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				row-gap: 50px;
				padding: 95px 70px;
				background: linear-gradient(180deg, #2c29ba 0%, #2b28b9 0.01%, #8d8bff 100%);
				${mqMobile} {
					row-gap: 24px;
					padding: 0 16px;
				}
			`}
		>
			<h3
				css={css`
					text-align: center;
				`}
			>
				WHY {isMobile && <br />} NEURON FUND?
			</h3>

			<div
				css={css`
					display: none;
					${mqMobile} {
						display: block;
						color: ${Color.Violet9};
						font-size: 12px;
						font-family: 18px;
						text-align: center;
					}
				`}
			>
				NEUR farming solution provides the best user experience and highest level of safety,
				combined with an attractive reward mechanism and instant staking liquidity through various
				of strategies.
			</div>

			{isMobile && <AuditPassed />}

			<div
				css={css`
					display: grid;
					grid-template-areas:
						'distribution option-pools security'
						'distribution option-pools single-assets';
					grid-template-columns: 12fr 18fr 20fr;
					gap: 28px;
					${mqMobile} {
						grid-template-areas:
							'security'
							'distribution'
							'option-pools'
							'single-assets';
						grid-template-columns: initial;
						gap: 16px;
					}
				`}
			>
				<DistributionCard />
				<OptionPoolsCard />
				<SecurityCard />
				<SingleAssetsCard />
			</div>
		</div>
	)
}
