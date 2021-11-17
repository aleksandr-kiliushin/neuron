import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Card } from './Card'
import { CardText } from './CardText'

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
			`}
		>
			<div css={{ alignSelf: 'end' }}>
				<Image alt="" src={singleAssetsLogosSvg} />
			</div>

			<h4 css={{ maxWidth: '300px', marginBottom: '29px' }}>Single assets and stablecoins</h4>

			<CardText css={{ maxWidth: '320px' }}>
				Get your fiat-on-crypto to work with lending and liquidity investing of your US dollars. All
				major stablecoins are supported (лого USDT, USDC, DAI, BUSD)
			</CardText>
		</Card>
	)
}
