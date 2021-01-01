import React from "react"
import Grid from "@material-ui/core/Grid"
import Section from "./Section"
import Ben from "./Ben"
import Thomas from "./Thomas"

export default () => {
  return (
    <Section title={"Artists"}>
      Klang-/Licht STROM is a collaboration between{" "}
      <a href="http://www.benbengler.com/" target="_blank" rel="noreferrer">
        Ben Bengler
      </a>{" "}
      and Thomas Geissl.
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Ben></Ben>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Thomas></Thomas>
        </Grid>
      </Grid>
    </Section>
  )
}
