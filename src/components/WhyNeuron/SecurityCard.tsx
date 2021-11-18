import { css } from '@emotion/react'

// Components
import { Card } from './Card'
import { CardText } from './CardText'
import { AuditPassed } from './AuditPassed'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

export const SecurityCard = () => {
	const isMobile = useIsMobile()

	return (
		<Card
			css={css`
				grid-area: security;
				display: flex;
				flex-direction: column;
				padding: 20px 20px 50px 45px;
				${mqMobile} {
					padding: 27px 18px 31px 26px;
				}
			`}
		>
			{!isMobile && <AuditPassed />}

			<h4
				css={css`
					margin-bottom: 7px;
					${mqMobile} {
						margin-bottom: 0;
					}
				`}
			>
				Security
			</h4>

			<div
				css={css`
					margin-bottom: 25px;
					color: ${Color.Violet16};
					font-size: 16px;
					line-height: 19px;
					${mqMobile} {
						font-size: 12px;
						line-height: 14px;
					}
				`}
			>
				We are obsessed with security
			</div>

			<CardText
				css={css`
					max-width: 318px;
				`}
			>
				Regularly reaudited protocol, bug bounty campaign. Web3&#39;s brightest minds(link) work on
				your better sleep at night.
			</CardText>
		</Card>
	)
}
