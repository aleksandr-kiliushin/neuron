import Image from 'next/image'
import { css } from '@emotion/react'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import greenShieldSvg from '#assets/green-shield.svg'
import pdfDocSvg from '#assets/pdf-doc.svg'

export const AuditPassed = () => {
	const isMobile = useIsMobile()

	return (
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
				font-weight: 700;
				${mqMobile} {
					align-self: center;
					margin-bottom: 0;
					padding: 12px 20px;
					background-color: ${Color.Violet23};
				}
			`}
		>
			<Image alt="" height={isMobile ? '25' : '21'} src={greenShieldSvg} />

			<div
				css={css`
					margin: 0 26px 0 16px;
					font-size: 11px;
					font-size: 14px;
				`}
			>
				Audit successfully passed
			</div>
			<Image alt="" height={isMobile ? '20' : '17'} src={pdfDocSvg} />
		</div>
	)
}
