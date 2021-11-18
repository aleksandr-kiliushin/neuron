import { css } from '@emotion/react'
import styled from '@emotion/styled'

// Components
import { Card } from './Card'
import { CardText } from './CardText'

// Styles
import { Color } from '#styles/index'

const DistributionValue = styled.div`
	color: ${Color.Cyan1};
	font-size: 48px;
	line-height: 69px;
`

const DistributionComment = styled.div`
	color: white;
	font-size: 24px;
	line-height: 29px;
`

export const DistributionCard = () => {
	return (
		<Card
			css={css`
				grid-area: distribution;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				row-gap: 32px;
				padding: 35px 30px 50px 35px;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					row-gap: 13px;
					font-family: Lato;
				`}
			>
				<div>
					<DistributionValue>$74,300</DistributionValue>
					<DistributionComment>distributed in Jul &#39;21</DistributionComment>
				</div>

				<div>
					<DistributionValue>152</DistributionValue>
					<DistributionComment>veNEUR holders</DistributionComment>
				</div>
			</div>

			<div>
				<h4
					css={css`
						margin-bottom: 12px;
					`}
				>
					Revenue distribution
				</h4>

				<CardText>
					veNEUR token entitles to the share of Neuron&#39;s revenue. The fund collects no other
					fees.
				</CardText>
			</div>
		</Card>
	)
}
