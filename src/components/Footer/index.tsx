import Image from 'next/image'
import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/index'

// Assets
import logo1Svg from '#assets/logo-1.svg'
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
				<div css={{ minWidth: '200px' }}>
					<Image alt="" src={logo1Svg} />
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

				<div css={{ display: 'flex', flexDirection: 'column', rowGap: '40px', alignItems: 'end' }}>
					<div css={{ display: 'flex', columnGap: '30px' }}>
						<Image alt="" src={twitterDarkSvg} />
						<Image alt="" src={telegramDarkSvg} />
						<Image alt="" src={githubDarkSvg} />
						<Image alt="" src={discordDarkSvg} />
						<Image alt="" src={mediumDarkSvg} />
					</div>

					<button
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
					</button>
				</div>
			</div>

			<div
				css={{
					marginTop: '97px',
					color: Color.Violet13,
					fontSize: '14px',
					fontWeight: 700,
					textAlign: 'center',
				}}
			>
				Copyright © Neuron Fund – 2021
			</div>
		</div>
	)
}
