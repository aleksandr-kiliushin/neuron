import { css } from '@emotion/react'

// Components
import { Questions } from './Questions'

export const Faq = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: space-between;
				column-gap: 70px;
				height: 890px;
				padding: 95px 70px 155px;
			`}
		>
			<h2
				css={css`
					color: white;
				`}
			>
				FAQ
			</h2>

			<Questions />
		</div>
	)
}
