import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

export const Nav = () => {
	const navItems = ['INVESTMENTS', 'HOW IT WORKS', 'ABOUT', 'TEAM']

	return (
		<div
			css={css`
				display: flex;
				align-items: center;
				column-gap: 50px;
				height: 27px;
				margin: 0 auto 0 100px;
			`}
		>
			{navItems.map((navItem) => (
				<div
					css={css`
						height: 100%;
						color: ${Color.LightBlue1};

						&:not(:last-child):after {
							content: '';
							position: relative;
							left: 25px;
							border-left: 1px solid ${Color.DarkViolet2};
						}
					`}
					key={navItem}
				>
					{navItem}
				</div>
			))}
		</div>
	)
}
