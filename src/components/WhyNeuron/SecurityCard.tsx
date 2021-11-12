import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Card } from './Card'
import { CardText } from './CardText'

// Styles
import { Color } from '#styles/constants'

// Assets
import greenShieldSvg from '#assets/green-shield.svg'
import pdfDocSvg from '#assets/pdf-doc.svg'

export const SecurityCard = () => {
	return (
		<Card
			css={css`
				grid-area: security;
				display: flex;
				flex-direction: column;
				padding: 20px 20px 50px 45px;
			`}
		>
			<div
				css={css`
					align-self: end;
					display: flex;
					align-items: center;
					width: fit-content;
					margin-bottom: 16px;
					padding: 11px 17px;
					background-color: ${Color.Violet14};
					border: 1px solid ${Color.Violet15};
					border-radius: 4px;
					color: white;
					font-size: 11px;
					font-weight: 700;
				`}
			>
				<Image alt="" src={greenShieldSvg} />

				<div css={{ margin: '0 26px 0 16px' }}>Audit successfully passed</div>
				<Image alt="" src={pdfDocSvg} />
			</div>

			<h4 css={{ marginBottom: '7px', color: 'white' }}>Security</h4>

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
