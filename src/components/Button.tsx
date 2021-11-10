import styled from '@emotion/styled'

// Types
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

const StyledBytton = styled.button``

export const Button = ({ children }: IProps) => {
	return <StyledBytton>{children}</StyledBytton>
}

type IProps = {
	color?: 'danger' | 'light' | 'primary'
	children: ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
