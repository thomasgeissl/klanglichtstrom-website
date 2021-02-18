import React from "react"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"
import styled from "styled-components"
const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 36px;
    /* color: rgb(245, 211, 126); */
  }
`

export default ({ muted, clickHandler }) => {
  return (
    <Container>
      {muted && <VolumeOffIcon onClick={clickHandler}></VolumeOffIcon>}
    </Container>
  )
}
