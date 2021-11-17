import Image from 'next/image'
import { css } from '@emotion/react'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import desktopDemoImg from '#assets/desktop-demo.png'
import mobileDemoImg from '#assets/mobile-demo.png'

export const Demo = () => {
	const isMobile = useIsMobile()
	return (
		<div
			css={css`
				display: grid;
				grid-template-columns: 1fr 733px;
				column-gap: 50px;
				height: 550px;
				padding-left: 70px;
				background: linear-gradient(180deg, #383dc2 0%, #2c29ba 100%);
				${mqMobile} {
					grid-template-columns: auto;
					height: auto;
					padding: 0 15px 50px;
				}
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					row-gap: 20px;
					max-width: 415px;
					${mqMobile} {
						row-gap: 8px;
						margin-bottom: 24px;
					}
				`}
			>
				<h3
					css={css`
						max-width: 370px;
					`}
				>
					Earn yield in DeFi with Neuron Fund
				</h3>

				<div
					css={css`
						color: ${Color.Violet9};
						font-size: 18px;
						font-weight: 400;
						line-height: 30px;
						${mqMobile} {
							font-size: 12px;
							line-height: 18px;
							text-align: center;
							padding: 0 20px;
						}
					`}
				>
					Neuron pools enable users to deposit assets to thoroughly tested smart contracts to gain
					return on crypto-assets
				</div>
			</div>

			<div css={{ position: 'relative' }}>
				<div
					css={css`
						position: absolute;
						right: 70px;
						top: 0;
						height: 434px;
						width: 733px;
						${mqMobile} {
							display: none;
						}
					`}
				>
					<Image alt="" src={desktopDemoImg} />
				</div>

				<div
					css={css`
						position: absolute;
						right: 150px;
						top: 150px;
						${mqMobile} {
							position: static;
							display: flex;
							justify-content: center;
						}
					`}
				>
					<Image
						alt=""
						height={isMobile ? '575' : '400'}
						src={mobileDemoImg}
						width={isMobile ? '275' : '200'}
					/>
				</div>
			</div>
		</div>
	)
}
