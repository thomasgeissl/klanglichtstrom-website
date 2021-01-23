import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 128px;
  margin-bottom: 196px;
`

export default ({ title, children }) => {
  return (
    <Container id={title}>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  )
}
