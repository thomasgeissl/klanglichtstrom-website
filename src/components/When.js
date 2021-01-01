import React from "react"
import styled from "styled-components"
import Section from "./Section"

const List = styled.ul`
  list-style-type: square;
`

export default () => {
  return (
    <Section>
      <h2>Dates</h2>
      <h3>Upcoming</h3>
      <List>
        <li>
          March 25, 2021:{" "}
          <a href="https://www.lab30.de/" target="_blank" rel="noreferrer">
            Lab30
          </a>
          , Augsburg, Germany
        </li>
      </List>
      <h3>Past</h3>
      <List>
        <li>
          October 27, 2019:{" "}
          <a
            href="https://www.koesk-muenchen.de/"
            target="_blank"
            rel="noreferrer"
          >
            Köşk
          </a>
          , Munich, Germany
        </li>
        <li>
          July 20, 2019:{" "}
          <a href="https://reservoir.space/" target="_blank" rel="noreferrer">
            Reservoir Festival
          </a>
          , Linachtalsperre, Vöhrenbach, Germany
        </li>
        <li>
          November 17, 2018:{" "}
          <a href="http://mucca.org/" target="_blank" rel="noreferrer">
            Kommandozentrale, Mucca
          </a>
          , Munich, Germany
        </li>
      </List>
    </Section>
  )
}
