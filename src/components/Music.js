import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const AudioPlayer = styled.iframe`
  border: 0; 
  width: 
  350px; 
  height: 786px;
`

const Music = () => {
  return (
    <Container>
      <AudioPlayer src="https://bandcamp.com/EmbeddedPlayer/album=20974309/size=large/bgcol=333333/linkcol=ffffff/transparent=true/" seamless><a href="https://zenmother.bandcamp.com/album/the-ascent-2">The Ascent by Zen Mother</a></AudioPlayer>

      <AudioPlayer src="https://bandcamp.com/EmbeddedPlayer/album=1194547090/size=large/bgcol=333333/linkcol=ffffff/transparent=true/" seamless><a href="https://zenmother.bandcamp.com/album/i-was-made-to-be-like-her">I Was Made To Be Like Her by Zen Mother</a></AudioPlayer>

      <AudioPlayer src="https://bandcamp.com/EmbeddedPlayer/album=3139629884/size=large/bgcol=333333/linkcol=ffffff/transparent=true/" seamless><a href="https://zenmother.bandcamp.com/album/the-great-mother">The Great Mother by Zen Mother</a></AudioPlayer>
    </Container>
  )
}

export default Music
