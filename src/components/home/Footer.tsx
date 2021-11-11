import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Button } from '#components/Button'

// Styles
import { Color } from '#styles/constants'

// Assets
import logoDark from '#assets/logo-dark.svg'
import discordDarkSvg from '#assets/discord-dark.svg'
import githubDarkSvg from '#assets/github-dark.svg'
import mediumDarkSvg from '#assets/medium-dark.svg'
import telegramDarkSvg from '#assets/telegram-dark.svg'
import twitterDarkSvg from '#assets/twitter-dark.svg'

export const Footer = () => {
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
			`}
		>
			<div
				css={css`
					display: grid;
					align-items: start;
					column-gap: 50px;
					grid-template-columns: 1fr 2fr 270px;
				`}
			>
				<div
					css={css`
						min-width: 200px;
					`}
				>
					<Image alt="" src={logoDark} />
				</div>
				<div
					css={css`
						display: grid;
						grid-template-rows: repeat(4, 1fr);
						grid-template-columns: 1fr 1fr;
						gap: 18px 100px;
						width: max-content;
						color: ${Color.Violet12};
						font-weight: 700;
					`}
				>
					{links.map((link) => (
						<div key={link}>{link}</div>
					))}
				</div>

				<div
					css={css`
						display: flex;
						flex-direction: column;
						row-gap: 40px;
						align-items: end;
					`}
				>
					<div
						css={css`
							display: flex;
							column-gap: 30px;
						`}
					>
						<Image alt="" src={twitterDarkSvg} />
						<Image alt="" src={telegramDarkSvg} />
						<Image alt="" src={githubDarkSvg} />
						<Image alt="" src={discordDarkSvg} />
						<Image alt="" src={mediumDarkSvg} />
					</div>

					<Button
						css={css`
							height: 40px;
							width: 182px;
							background-color: ${Color.Violet12};
							border: none;
							border-radius: 8px;
							color: white;
							text-transform: uppercase;
						`}
					>
						Start investing
					</Button>
				</div>
			</div>

			<div
				css={css`
					margin-top: 97px;
					color: ${Color.Violet13};
					font-size: 14px;
					font-weight: 700;
					text-align: center;
				`}
			>
				Copyright © Neuron Fund – 2021
			</div>
		</div>
	)
}
