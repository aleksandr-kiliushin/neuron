import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

export const Nav = () => {
	const navItems = ['Investments', 'How it works', 'About', 'Team']

	return (
		<nav
			css={css`
				display: flex;
				align-items: center;
				column-gap: 50px;
				height: 27px;
				line-height: 27px;
			`}
		>
			{navItems.map((navItem) => (
				<div
					css={css`
						height: 100%;
						color: ${Color.LightBlue1};
						text-transform: uppercase;

						&:not(:last-child):after {
							content: '';
							position: relative;
							left: 25px;
							border-left: 1px solid ${Color.Violet2};
						}
					`}
					key={navItem}
				>
					{navItem}
				</div>
			))}
		</nav>
	)
}
