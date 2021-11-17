import { css } from '@emotion/react'

// Styles
import { Color, mqMobile } from '#styles/index'

export const Tabs = () => {
	const tabs = [
		{ isActive: false, name: 'Liquity pairs' },
		{ isActive: false, name: 'Single assets' },
		{ isActive: true, name: 'Vaults' },
	]

	return (
		<div
			css={css`
				display: flex;
				justify-content: center;
				column-gap: 50px;
				margin: 28px 70px 0;
				border-bottom: 1px solid ${Color.Violet5};
				${mqMobile} {
					justify-content: space-between;
					column-gap: 10px;
					margin: 24px 15px 0;
				}
			`}
		>
			{tabs.map(({ isActive, name }) => (
				<div
					css={css`
						padding-bottom: 21px;
						color: white;
						font-size: 18px;
						line-height: 22px;
						border-bottom: ${isActive ? `3px solid ${Color.Blue1}` : 'none'};
						${mqMobile} {
							padding-bottom: 18px;
							font-size: 14px;
							line-height: 17px;
						}
					`}
					key={name}
				>
					{name}
				</div>
			))}
		</div>
	)
}
