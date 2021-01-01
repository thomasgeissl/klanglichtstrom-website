import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 64px;
  margin-bottom: 98px;
`
export default ({ children }) => {
  return <Container>{children}</Container>
}
