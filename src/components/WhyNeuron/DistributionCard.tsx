import { css } from '@emotion/react'

// Components
import { Card } from './Card'

// Styles
import { Color } from '#styles/constants'

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
			<div
				css={css`
					font-family: Lato;
				`}
			>
				<div>
					<div
						css={css`
							color: ${Color.Cyan1};
							font-size: 48px;
							line-height: 69px;
						`}
					>
						$74,300
					</div>
					<div
						css={css`
							margin-bottom: 13px;
							color: white;
							font-size: 24px;
							line-height: 29px;
						`}
					>
						distributed in Jul &#39;21
					</div>
				</div>

				<div>
					<div
						css={css`
							color: ${Color.Cyan1};
							font-size: 48px;
							line-height: 69px;
						`}
					>
						152
					</div>
					<div
						css={css`
							color: white;
							font-size: 24px;
							line-height: 29px;
						`}
					>
						veNEUR holders
					</div>
				</div>
			</div>

			<div>
				<h4
					css={css`
						margin-bottom: 12px;
						color: white;
					`}
				>
					Revenue distribution
				</h4>
				<div
					css={css`
						color: white;
						font-size: 16px;
						line-height: 19px;
					`}
				>
					veNEUR token entitles to the share of Neuron&#39;s revenue. The fund collects no other
					fees.
				</div>
			</div>
		</Card>
	)
}
