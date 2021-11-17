import { css } from '@emotion/react'

// Components
import { Tabs } from './Tabs'

// Styles
import { mqMobile } from '#styles/index'

export const HeaderAndTabs = () => {
	return (
		<div
			css={css`
				height: 275px;
				padding 100px 70px 28px;
				${mqMobile} {
					height: 200px;
					padding: 50px 15px 19px;
				}
			`}
		>
			<h3
				css={css`
					text-align: center;
					${mqMobile} {
						max-width: 250px;
						margin: auto;
					}
				`}
			>
				How Neuron Fund works?
			</h3>

			<Tabs />
		</div>
	)
}
