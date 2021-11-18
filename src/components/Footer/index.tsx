import Image from 'next/image'
import { css } from '@emotion/react'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import logo1Svg from '#assets/logo-1.svg'
import discordDarkSvg from '#assets/discord-dark.svg'
import githubDarkSvg from '#assets/github-dark.svg'
import mediumDarkSvg from '#assets/medium-dark.svg'
import telegramDarkSvg from '#assets/telegram-dark.svg'
import twitterDarkSvg from '#assets/twitter-dark.svg'

export const Footer = () => {
	const isMobile = useIsMobile()

	const links = [
		'Docs',
		'White paper',
		'Governance',
		'Analytics',
		'NEUR',
		'AXON',
		'Careers',
		'Forum',
	]

	return (
		<div
			css={css`
				height: 390px;
				padding: 100px 82px 80px 56px;
				box-shadow: 4px -8px 30px rgba(223, 211, 255, 0.7);
				${mqMobile} {
					height: initial;
					padding: 35px 50px;
				}
			`}
		>
			<div
				css={css`
					display: grid;
					grid-template-areas: 'logo links social-networks-and-button';
					align-items: start;
					grid-template-columns: 1fr 2fr 270px;
					column-gap: 50px;
					${mqMobile} {
						grid-template-areas:
							'social-networks-and-button'
							'links';
						align-items: initial;
						grid-template-columns: initial;
						row-gap: 25px;
					}
				`}
			>
				<div
					css={css`
						grid-area: logo;
						min-width: 200px;
						${mqMobile} {
							display: none;
						}
					`}
				>
					<Image alt="" src={logo1Svg} />
				</div>

				<div
					css={css`
						grid-area: links;
						display: grid;
						grid-template-rows: repeat(4, 1fr);
						grid-template-columns: 1fr 1fr;
						gap: 18px 100px;
						width: max-content;
						margin: 0 auto;
						color: ${Color.Violet12};
						font-weight: 700;
						${mqMobile} {
							font-size: 11px;
							gap: 14px 42px;
						}
					`}
				>
					{links.map((link) => (
						<div key={link}>{link}</div>
					))}
				</div>

				<div
					css={css`
						grid-area: social-networks-and-button;
						display: flex;
						flex-direction: column;
						align-items: end;
						row-gap: 40px;
						${mqMobile} {
							align-items: center;
							row-gap: 26px;
						}
					`}
				>
					<div
						css={css`
							display: flex;
							column-gap: 30px;
							${mqMobile} {
								column-gap: 18px;
							}
						`}
					>
						<Image alt="" height={isMobile ? '27px' : '30px'} src={twitterDarkSvg} />
						<Image alt="" height={isMobile ? '27px' : '30px'} src={telegramDarkSvg} />
						<Image alt="" height={isMobile ? '27px' : '30px'} src={githubDarkSvg} />
						<Image alt="" height={isMobile ? '27px' : '30px'} src={discordDarkSvg} />
						<Image alt="" height={isMobile ? '27px' : '30px'} src={mediumDarkSvg} />
					</div>

					<button
						css={css`
							padding: 11px 50px;
							background-color: ${Color.Violet12};
							border: none;
							border-radius: 8px;
							color: white;
							text-transform: uppercase;
						`}
					>
						Start investing
					</button>
				</div>
			</div>

			<div
				css={css`
					margin-top: 100px;
					color: ${Color.Violet13};
					font-size: 14px;
					font-weight: 700;
					text-align: center;
					${mqMobile} {
						margin-top: 40px;
						font-size: 9px;
					}
				`}
			>
				Copyright © Neuron Fund – 2021
			</div>
		</div>
	)
}
