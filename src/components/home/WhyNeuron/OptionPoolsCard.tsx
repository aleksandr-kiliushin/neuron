import { css } from '@emotion/react'

// Components
import { Card } from './Card'

export const OptionPoolsCard = () => {
	return (
		<Card
			css={css`
				grid-area: option-pools;
			`}
		>
			OptionPoolsCard
		</Card>
	)
}
