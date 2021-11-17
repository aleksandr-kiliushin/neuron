import { css } from '@emotion/react'

// Components
import { Card } from './Card'
import { CardText } from './CardText'
import { AuditPassed } from './AuditPassed'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color } from '#styles/index'

export const SecurityCard = () => {
	const isMobile = useIsMobile()

	return (
		<Card
			css={css`
				grid-area: security;
				display: flex;
				flex-direction: column;
				padding: 20px 20px 50px 45px;
			`}
		>
			{!isMobile && <AuditPassed />}

			<h4 css={{ marginBottom: '7px' }}>Security</h4>

			<div
				css={{ marginBottom: '25px', color: Color.Violet16, fontSize: '16px', lineHeight: '19px' }}
			>
				We are obsessed with security
			</div>

			<CardText css={{ maxWidth: '318px' }}>
				Regularly reaudited protocol, bug bounty campaign. Web3&#39;s brightest minds(link) work on
				your better sleep at night.
			</CardText>
		</Card>
	)
}
