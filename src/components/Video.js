import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import Section from "./Section"

const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default () => {
  return (
    <Section>
      <Wrapper>
        {/* <ReactPlayer
        url={"https://vimeo.com/385237672"}
        controls={true}
        width="100%"
        height="auto"
      ></ReactPlayer> */}
        <iframe
          src="https://player.vimeo.com/video/385237672"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Wrapper>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </Section>
  )
}
