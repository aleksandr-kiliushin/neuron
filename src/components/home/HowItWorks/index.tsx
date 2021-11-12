import { css } from '@emotion/react'

// Components
import { HeaderAndTabs } from './HeaderAndTabs'
import { Cards } from './Cards'

export const HowItWorks = () => {
	return (
		<div
			css={css`
				background: linear-gradient(180deg, #34338d 0%, #2d33b3 100%);
			`}
		>
			<HeaderAndTabs />
			<Cards />
		</div>
	)
}
