import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Nav } from './Nav'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import logo2Svg from '#assets/logo-2.svg'
import MenuButtonMobile from '#assets/menu-button-mobile.svg'

export const Header = () => {
	const isMobile = useIsMobile()

	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				justify-content: space-around;
				column-gap: 10px;
				height: 90px;
				padding: 0px 20px;
				background-color: ${Color.Violet1};

				${mqMobile} {
					align-items: start;
					padding: 40px 10px 10px 15px;
				}
			`}
		>
			<Image alt="" src={MenuButtonMobile} />

			<Image alt="" src={logo2Svg} height={isMobile ? 30 : 40} width={isMobile ? 150 : 200} />

			<Nav />

			<button
				css={css`
					height: 40px;
					width: 180px;
					background-color: ${Color.Light1};
					border: 2px solid ${Color.Violet3};
					color: ${Color.Violet3};
					font-size: 14px;
					text-transform: uppercase;

					${mqMobile} {
						height: 25px;
						width: 40px;
						padding: 0px;
					}
				`}
			>
				{isMobile ? 'App' : 'Open app'}
			</button>
		</header>
	)
}
