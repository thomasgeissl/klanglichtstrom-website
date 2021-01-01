import React from "react"
import ReactPlayer from "react-player"
import Section from "./Section"

export default () => {
  return (
    <Section>
      <ReactPlayer
        url={"https://vimeo.com/385237672"}
        controls={true}
        style={{ maxWidth: "100%" }}
      ></ReactPlayer>
    </Section>
  )
}
