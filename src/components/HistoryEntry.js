import React from 'react'
import styled from 'styled-components'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <Wrapper>
      <h2>{nameOfGame}</h2>
      {players.map((player, index) => (
        <Player key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </Player>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  border-top: dotted 2px lightgrey;
`

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`
