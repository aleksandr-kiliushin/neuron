import styled from '@emotion/styled'

// Styles
import { mqMobile } from '#styles/index'

export const CardText = styled.div`
	color: white;
	font-size: 16px;
	font-weight: 300;
	line-height: 19px;
	${mqMobile} {
		font-size: 13px;
		line-height: 16px;
	}
`
