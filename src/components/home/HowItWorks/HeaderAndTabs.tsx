import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

export const HeaderAndTabs = () => {
	const tabs = [
		{ isActive: false, name: 'Liquity pairs' },
		{ isActive: false, name: 'Single assets' },
		{ isActive: true, name: 'Vaults' },
	]

	return (
		<div
			css={css`
				height: 204px;
				padding: 60px 70px 28px;
			`}
		>
			<h2
				css={css`
					display: flex;
					align-items: center;
					margin: 0;
					color: white;
					flex-direction: column;
					font-size: 36px;
					line-height: 43px;
				`}
			>
				How Neuron Fund works?
			</h2>

			<div
				css={css`
					display: flex;
					justify-content: center;
					column-gap: 50px;
					margin: 28px 70px 0;
					border-bottom: 1px solid ${Color.Violet5};
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
						`}
						key={name}
					>
						{name}
					</div>
				))}
			</div>
		</div>
	)
}
