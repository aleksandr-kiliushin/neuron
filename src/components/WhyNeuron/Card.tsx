import styled from '@emotion/styled'

// Styles
import { Color } from '#styles/index'

// Types
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

const StyledCard = styled('div')`
	background-color: ${Color.Violet10};
	border: 1px solid ${Color.Violet11};
	border-radius: 8px;
`

export const Card = ({ children, ...rest }: IProps) => {
	return <StyledCard {...rest}>{children}</StyledCard>
}

type IProps = {
	children: ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
