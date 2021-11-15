import { css } from '@emotion/react'

// Components
import { Card } from './Card'
import { CardText } from './CardText'

// Styles
import { Color } from '#styles/index'

export const DistributionCard = () => {
	return (
		<Card
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				grid-area: distribution;
				padding: 35px 30px 50px 35px;
			`}
		>
			<div css={{ fontFamily: 'Lato' }}>
				<div>
					<div css={{ color: Color.Cyan1, fontSize: '48px', lineHeight: '69px' }}>$74,300</div>
					<div css={{ marginBottom: '13px', color: 'white', fontSize: '24px', lineHeight: '29px' }}>
						distributed in Jul &#39;21
					</div>
				</div>

				<div>
					<div css={{ color: Color.Cyan1, fontSize: '48px', lineHeight: '69px' }}>152</div>
					<div css={{ color: 'white', fontSize: '24px', lineHeight: '29px' }}>veNEUR holders</div>
				</div>
			</div>

			<div>
				<h4 css={{ marginBottom: '12px', color: 'white' }}>Revenue distribution</h4>

				<CardText>
					veNEUR token entitles to the share of Neuron&#39;s revenue. The fund collects no other
					fees.
				</CardText>
			</div>
		</Card>
	)
}
