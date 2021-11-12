import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Card } from './Card'

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
			<div
				css={css`
					align-self: end;
				`}
			>
				<Image alt="" src={singleAssetsLogosSvg} />
			</div>

			<h4
				css={css`
					max-width: 300px;
					margin-bottom: 29px;
					color: white;
				`}
			>
				Single assets and stablecoins
			</h4>

			<div
				css={css`
					max-width: 318px;
					color: white;
					font-size: 16px;
					line-height: 19px;
				`}
			>
				Get your fiat-on-crypto to work with lending and liquidity investing of your US dollars. All
				major stablecoins are supported (лого USDT, USDC, DAI, BUSD)
			</div>
		</Card>
	)
}