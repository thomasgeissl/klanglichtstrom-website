import React, { useState } from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import Section from "./Section"
import Unmute from "../components/Unmute"

const Wrapper = styled.div`
  width: auto; // Reset width
  height: auto; // Reset height
  .player {
    padding-top: 56.25%; // Percentage ratio for 16:9
    position: relative; // Set to relative
    div {
      position: absolute; // Scaling will occur since parent is relative now
      top: 0;
    }
  }
`

export default () => {
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(0)
  return (
    <Section>
      <Wrapper>
        <Unmute
          muted={muted}
          clickHandler={() => {
            setVolume(1)
            setMuted(false)
          }}
        ></Unmute>
        <ReactPlayer
          className="player"
          // url={"https://www.youtube.com/watch?v=R1oVrMQN9xs"}
          url={"https://vimeo.com/385237672"}
          controls={true}
          playing={true}
          autoPlay={true}
          loop={true}
          volume={volume}
          muted={muted}
          width="100%"
          height="auto"
          playsinline={true}
        ></ReactPlayer>
        {/* <iframe
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
        ></iframe> */}
      </Wrapper>
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
    </Section>
  )
}
