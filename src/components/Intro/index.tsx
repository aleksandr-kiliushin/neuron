import Image from 'next/image'
import styled from '@emotion/styled'

// Styles
import { Color } from '#styles/constants'

// Assets
import discordLightSvg from '#assets/discord-light.svg'
import mediumLightSvg from '#assets/medium-light.svg'
import telegramLightSvg from '#assets/telegram-light.svg'
import twitterLightSvg from '#assets/twitter-light.svg'
import introBackgroundJpg from '#assets/intro-background.png'

const StyledButton = styled.button<{ kind: string }>`
	height: 60px;
	width: 216px;
	border-radius: 8px;
	font-size: 18px;
	text-transform: uppercase;
	background-color: ${({ kind }) => (kind === 'primary' ? 'white' : 'transparent')};
	border: ${({ kind }) => (kind === 'primary' ? 'none' : '2px solid white')};
	color: ${({ kind }) => (kind === 'primary' ? Color.Violet4 : 'white')};
`

export const Intro = () => {
	return (
		<div
			css={{
				position: 'relative',
				height: '650px',
				background: 'linear-gradient(180deg, #2b2974 0%, #343390 100%)',
				backdropFilter: 'blur(10px)',
			}}
		>
			<div css={{ position: 'absolute', zIndex: 2, padding: '125px 0 0 72px' }}>
				<div css={{ display: 'flex', columnGap: '30px', marginBottom: '17px' }}>
					<Image alt="" src={twitterLightSvg} />
					<Image alt="" src={telegramLightSvg} />
					<Image alt="" src={discordLightSvg} />
					<Image alt="" src={mediumLightSvg} />
				</div>

				<h2>Earn yield</h2>
				<h3>ON CRYPTO AND STABLECOINS</h3>

				<div
					css={{ margin: '16px 0 31px', color: Color.Blue1, fontSize: '24px', lineHeight: '29px' }}
				>
					Invest and save with one easy-to-use platform.
					<br />
					Maximum yields with improved security.
				</div>

				<div>
					<StyledButton kind="secondary" css={{ marginRight: '40px' }}>
						White paper
					</StyledButton>
					<StyledButton kind="primary">Start investing</StyledButton>
				</div>
			</div>

			<div css={{ position: 'absolute', right: 0, top: '-80px' }}>
				<Image alt="" src={introBackgroundJpg} />
			</div>
		</div>
	)
}
