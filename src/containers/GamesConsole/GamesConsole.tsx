import React, { useState } from 'react'
import './GamesConsole.css';

export default function Games() {
    const [game, setGame] = useState('');
    const [games, setGames] = useState(['']);
  return (
    <div className='GamesContainer'>
        <h3>Games</h3>
    </div>
  )
}
