import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Button } from '#components/Button'

// Styles
import { Color } from '#styles/constants'

// Assets
import discordLightSvg from '#assets/discord-light.svg'
import mediumLightSvg from '#assets/medium-light.svg'
import telegramLightSvg from '#assets/telegram-light.svg'
import twitterLightSvg from '#assets/twitter-light.svg'
import introBackgroundJpg from '#assets/intro-background.png'

export const Intro = () => {
	return (
		<div
			css={css`
				position: relative;
				height: 650px;
				background: linear-gradient(180deg, #2b2974 0%, #343390 100%);
				backdrop-filter: blur(10px);
			`}
		>
			<div
				css={css`
					position: absolute;
					z-index: 2;
					padding: 125px 0 0 72px;
				`}
			>
				<div
					css={css`
						display: flex;
						column-gap: 30px;
						margin-bottom: 17px;
					`}
				>
					<Image alt="" src={twitterLightSvg} />
					<Image alt="" src={telegramLightSvg} />
					<Image alt="" src={discordLightSvg} />
					<Image alt="" src={mediumLightSvg} />
				</div>

				<h2
					css={css`
						color: white;
					`}
				>
					Earn yield
				</h2>
				<h3
					css={css`
						margin-bottom: 16px;
						color: white;
						font-size: 36px;
						line-height: 43px;
					`}
				>
					ON CRYPTO AND STABLECOINS
				</h3>
				<div
					css={css`
						margin-bottom: 31px;
						color: ${Color.Blue1};
						font-size: 24px;
						line-height: 29px;
					`}
				>
					Invest and save with one easy-to-use platform.
					<br />
					Maximum yields with improved security.
				</div>

				<div
					css={css`
						display: flex;
						column-gap: 40px;
					`}
				>
					<Button
						css={css`
							width: 216px;
							height: 60px;
							background-color: transparent;
							border: 2px solid white;
							border-radius: 8px;
							color: white;
							font-size: 18px;
						`}
					>
						WHITE PAPER
					</Button>
					<Button
						css={css`
							width: 216px;
							height: 60px;
							background-color: white;
							border: none;
							border-radius: 8px;
							color: ${Color.Violet4};
							font-size: 18px;
						`}
					>
						START INVESTING
					</Button>
				</div>
			</div>

			<div
				css={css`
					position: absolute;
					right: 0;
					top: -80px;
				`}
			>
				<Image alt="" src={introBackgroundJpg} />
			</div>
		</div>
	)
}
