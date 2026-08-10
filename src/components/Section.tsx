import React, { type ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 128px;
  margin-bottom: 196px;
`

type SectionProps = {
  title?: string
  children?: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <Container id={title}>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  )
}
