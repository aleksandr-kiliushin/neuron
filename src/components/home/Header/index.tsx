import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Button } from '#components/Button'
import { Nav } from './Nav'

// Styles
import { Color } from '#styles/constants'

// Assets
import logo2Svg from '#assets/logo-2.svg'

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
			`}
		>
			<div
				css={css`
					min-width: 200px;
				`}
			>
				<Image alt="" src={logo2Svg} />
			</div>

			<Nav />

			<Button
				css={css`
					height: 40px;
					width: 180px;
					background-color: ${Color.Light1};
					border: 2px solid ${Color.Violet3};
					border-radius: 8px;
					color: ${Color.Violet3};
					font-size: 14px;
				`}
			>
				OPEN APP
			</Button>
		</header>
	)
}
