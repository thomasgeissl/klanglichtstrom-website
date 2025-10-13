import React, { useState, useRef } from "react"
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
  const [ready, setReady] = useState(false)
  const [volume, setVolume] = useState(0)
  const playerRef = useRef(null)

  return (
    <Section>
      <Wrapper>
        {ready && (
          <Unmute
            muted={muted}
            clickHandler={() => {
              setVolume(1)
              setMuted(false)
            }}
          ></Unmute>
        )}
        <ReactPlayer
          ref={playerRef}
          className="player"
          src={"https://www.youtube.com/watch?v=R1oVrMQN9xs"}
          controls={false}
          playing={true}
          autoPlay={true}
          loop={true}
          volume={volume}
          muted={muted}
          width="100%"
          height="auto"
          playsinline={true}
          onStart={() => {
            setReady(true)
          }}
          config={{
            youtube: {
              start: 60,
              autoplay: 1,
              mute: 1,
              loop: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
            },
          }}
        ></ReactPlayer>
      </Wrapper>
    </Section>
  )
}
