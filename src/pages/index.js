import React from "react"
import styled from "styled-components"

import Seo from "../components/Seo"
import Video from "../components/Video"
import What from "../components/What"
import When from "../components/When"
import Who from "../components/Who"
import Contact from "../components/Contact"

import "../styles/index.scss"

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`
const Title = styled.h1`
  text-align: right;
`

export default function Home() {
  return (
    <Container>
      <Title>Klang-/Licht STROM</Title>
      <Seo title={"Klang-/Licht STROM"}></Seo>
      <Video></Video>
      <What></What>
      <When></When>
      <Who></Who>
      <Contact></Contact>
    </Container>
  )
}
