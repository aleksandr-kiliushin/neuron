import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Card } from './Card'
import { CardText } from './CardText'

// Styles
import { mqMobile } from '#styles/index'

// Assets
import singleAssetsLogosSvg from '#assets/single-assets-logos.svg'

export const SingleAssetsCard = () => {
	return (
		<Card
			css={css`
				grid-area: single-assets;
				display: flex;
				flex-direction: column;
				padding: 32px 20px 60px 45px;
				${mqMobile} {
					padding: 27px;
				}
			`}
		>
			<div
				css={css`
					align-self: end;
					${mqMobile} {
						align-self: initial;
						margin-bottom: 24px;
					}
				`}
			>
				<Image alt="" src={singleAssetsLogosSvg} />
			</div>

			<h4
				css={css`
					max-width: 300px;
					margin-bottom: 29px;
					${mqMobile} {
						margin-bottom: 11px;
					}
				`}
			>
				Single assets and stablecoins
			</h4>

			<CardText
				css={css`
					max-width: 320px;
				`}
			>
				Get your fiat-on-crypto to work with lending and liquidity investing of your US dollars. All
				major stablecoins are supported (лого USDT, USDC, DAI, BUSD)
			</CardText>
		</Card>
	)
}
