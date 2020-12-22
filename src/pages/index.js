import React from "react"

import What from "../components/What"
import When from "../components/When"
import Who from "../components/Who"

import "../styles/index.scss"

export default function Home() {
  return (
    <div>
      <h1>Klang-/Licht STROM</h1>
      <iframe
        src="https://player.vimeo.com/video/385237672"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        title="klanglichtstrom"
      ></iframe>{" "}
      <br></br>
      klang licht strom. coming soon. <br></br>bussi und baba.
      <What></What>
      <When></When>
      <Who></Who>
    </div>
  )
}
