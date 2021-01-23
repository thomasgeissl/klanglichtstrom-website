import React from "react"
import styled from "styled-components"

const Container = styled.div`
  text-align: right;
  margin-bottom: 64px;
`

export default () => {
  const year = new Date().getFullYear()
  return <Container>&#169; {year} - Bengler &amp; Geissl</Container>
}
