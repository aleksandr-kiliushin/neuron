import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Nav } from './Nav'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import logo2Svg from '#assets/logo-2.svg'
import MenuButtonMobile from '#assets/menu-button-mobile.svg'

export const Header = () => {
	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				justify-content: space-around;
				height: 90px;
				padding: 0px 20px;
				background-color: ${Color.Violet1};

				// ${mqMobile} {
				// 	font-size: 50px;
				// }
			`}
		>
			<Image alt="" src={MenuButtonMobile} />

			<Image alt="" src={logo2Svg} />

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
				`}
			>
				Open app
			</button>
		</header>
	)
}
