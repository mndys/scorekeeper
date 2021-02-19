import { useState } from 'react'
import './App.css'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onAddPlayer={addPlayer} />
      <button onClick={resetScores}>Reset scores</button>
      <button onClick={resetAll}>Reset all</button>
    </div>
  )

  function onPlus(index) {
    setPlayers([
      ...players.slice(0, index),
      {...players[index], score: players[index].score + 1},
      ...players.slice(index + 1)
    ])
  }

  function onMinus(index) {
    setPlayers([
      ...players.slice(0, index),
      {...players[index], score: players[index].score - 1},
      ...players.slice(index + 1)
    ])
  }

  function addPlayer(name) {
    setPlayers([...players, { name }])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }
}

export default App
