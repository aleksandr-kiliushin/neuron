import styled from '@emotion/styled'

// Types
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

const StyledButton = styled('button')``

export const Button = ({ children, ...rest }: IProps) => {
	return <StyledButton {...rest}>{children}</StyledButton>
}

type IProps = {
	children: ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
