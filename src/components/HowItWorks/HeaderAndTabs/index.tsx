import { css } from '@emotion/react'

// Components
import { Tabs } from './Tabs'

// Styles
import { mqMobile } from '#styles/index'

export const HeaderAndTabs = () => {
	return (
		<div
			css={css`
				padding: 100px 70px 50px;
				${mqMobile} {
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
				HOW NEURON FUND WORKS?
			</h3>

			<Tabs />
		</div>
	)
}
