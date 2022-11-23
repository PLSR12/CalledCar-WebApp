import { ReactNode } from 'react'
import { Container } from './styles'

export interface ITitleProps {
  children: ReactNode
}

export function TitleBox({ children }: ITitleProps) {
  return <Container>{children}</Container>
}
