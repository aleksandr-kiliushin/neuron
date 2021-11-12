import Image from 'next/image'
import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

// Assets
import desktopDemoImg from '#assets/desktop-demo.png'
import mobileDemoImg from '#assets/mobile-demo.png'

export const Demo = () => {
	return (
		<div
			css={css`
				display: grid;
				grid-template-columns: 1fr 733px;
				column-gap: 50px;
				height: 550px;
				padding-left: 70px;
				background: linear-gradient(180deg, #383dc2 0%, #2c29ba 100%);
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					row-gap: 20px;
					max-width: 415px;
				`}
			>
				<h2
					css={css`
						color: white;
					`}
				>
					Earn yield
					<br />
					in DeFi with
					<br />
					Neuron
					<br />
					Fund
				</h2>

				<div
					css={css`
						color: ${Color.Violet9};
						font-size: 18px;
						line-height: 30px;
					`}
				>
					Neuron pools enable users to deposit assets to thoroughly tested smart contracts to gain
					return on crypto-assets
				</div>
			</div>

			<div
				css={css`
					position: relative;
				`}
			>
				<div
					css={css`
						position: absolute;
						right: 70px;
						top: 0;
					`}
				>
					<Image alt="" height="434" src={desktopDemoImg} width="733" />
				</div>

				<div
					css={css`
						position: absolute;
						right: 150px;
						top: 150px;
					`}
				>
					<Image alt="" height="400" src={mobileDemoImg} width="200" />
				</div>
			</div>
		</div>
	)
}
