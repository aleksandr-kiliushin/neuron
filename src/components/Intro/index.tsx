import Image from 'next/image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import discordLightSvg from '#assets/discord-light.svg'
import mediumLightSvg from '#assets/medium-light.svg'
import telegramLightSvg from '#assets/telegram-light.svg'
import twitterLightSvg from '#assets/twitter-light.svg'
import introBackgroundDesktop from '#assets/intro-background-desktop.png'
import introBackgroundMobile from '#assets/intro-background-mobile.png'

const StyledButton = styled.button<{ kind: string }>`
	height: 50px;
	width: 216px;
	border-radius: 8px;
	font-size: 18px;
	text-transform: uppercase;
	background-color: ${({ kind }) => (kind === 'primary' ? 'white' : 'transparent')};
	border: ${({ kind }) => (kind === 'primary' ? 'none' : '2px solid white')};
	color: ${({ kind }) => (kind === 'primary' ? Color.Violet4 : 'white')};
	${mqMobile} {
		height: 40px;
		font-size: 14px;
	}
`

export const Intro = () => {
	const isMobile = useIsMobile()

	return (
		<div
			css={css`
				position: relative;
				height: 700px;
				background: linear-gradient(180deg, #2b2974 0%, #343390 100%);
				backdrop-filter: blur(10px);
				${mqMobile} {
					height: 300px;
				}
			`}
		>
			<div
				css={css`
					position: absolute;
					z-index: 2;
					padding: 125px 0 0 72px;
					${mqMobile} {
						padding: 50px 30px 0;
					}
				`}
			>
				<div
					css={css`
						display: flex;
						column-gap: 30px;
						margin-bottom: 17px;
						${mqMobile} {
							display: none;
						}
					`}
				>
					<Image alt="" src={twitterLightSvg} />
					<Image alt="" src={telegramLightSvg} />
					<Image alt="" src={discordLightSvg} />
					<Image alt="" src={mediumLightSvg} />
				</div>

				<h2>Earn yield</h2>
				<h3>On crypto and stablecoins</h3>

				<div
					css={css`
						margin: 16px 0 31px;
						color: ${Color.Blue1};
						font-size: 24px;
						line-height: 29px;
						${mqMobile} {
							margin: 14px 0 25px;
							font-size: 14px;
							line-height: 17px;
							text-align: center;
						}
					`}
				>
					Invest and save with one
					{isMobile && <br />}
					easy-to-use platform.
					<br />
					Maximum yields with improved security.
				</div>

				<div
					css={css`
						${mqMobile} {
							display: flex;
							justify-content: center;
						}
					`}
				>
					<StyledButton
						css={css`
							margin-right: 40px;
							${mqMobile} {
								display: none;
								height: 40px;
							}
						`}
						kind="secondary"
					>
						White paper
					</StyledButton>
					<StyledButton kind="primary">Start investing</StyledButton>
				</div>
			</div>

			<div
				css={css`
					position: absolute;
					right: 0;
					top: -80px;
					${mqMobile} {
						top: 0;
					}
				`}
			>
				<Image alt="" src={isMobile ? introBackgroundMobile : introBackgroundDesktop} />
			</div>
		</div>
	)
}
