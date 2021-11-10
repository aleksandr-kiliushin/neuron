import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Button } from '#components/Button'
import { Nav } from './Nav'

// Styles
import { Color } from '#styles/constants'

// Assets
import Logo1 from '#assets/logo-1.svg'

export const Header = () => {
	return (
		<div
			css={css`
				display: flex;
				align-items: center;
				height: 90px;
				padding: 0px 70px;
				background-color: ${Color.DarkViolet1};
			`}
		>
			<Image alt="" src={Logo1} />

			<Nav />

			<Button
				css={css`
					height: 40px;
					width: 180px;
				`}
			>
				OPEN APP
			</Button>
		</div>
	)
}
