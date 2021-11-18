import { css } from '@emotion/react'

// Components
import { Questions } from './Questions'

// Styles
import { mqMobile } from '#styles/index'

export const Faq = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: space-between;
				column-gap: 70px;
				height: 890px;
				padding: 95px 70px 155px;
				background: linear-gradient(179.65deg, #8d8bff 12.33%, #cac9ff 52.38%, #ffffff 87.42%);
				${mqMobile} {
					flex-direction: column;
					height: initial;
					row-gap: 15px;
					padding: 50px 15px;
				}
			`}
		>
			<h2>FAQ</h2>

			<Questions />
		</div>
	)
}
