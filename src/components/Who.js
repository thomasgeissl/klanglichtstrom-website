import React from "react"
import Grid from "@mui/material/Grid"
import styled from "styled-components"
import Section from "./Section"
import Ben from "./Ben"
import Thomas from "./Thomas"

const Image = styled.img`
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  display: block;
  margin: auto;
  margin-top: 128px;
  margin-bottom: 128px;
`

export default () => {
  return (
    <Section title={"Artists"}>
      <Image src="artists.jpg"></Image>
      <p>
        Klang-/Licht STROM is a collaboration between{" "}
        <a href="http://www.benbengler.com/" target="_blank" rel="noreferrer">
          Ben Bengler
        </a>{" "}
        and{" "}
        <a
          href="https://thomasgeissl.github.io/whoami/"
          target="_blank"
          rel="noreferrer"
        >
          Thomas Geissl
        </a>
        .
      </p>
      <Grid container spacing={3}>
        <Grid size={{xs:12, sm:6}}>
          <Ben></Ben>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Thomas></Thomas>
        </Grid>
      </Grid>
    </Section>
  )
}
