import React, { useState, useEffect } from 'react'
import './GamesConsole.css';

export default function Games() {
    const [menu, setMenu] = useState(true);
    const [game, setGame] = useState('');

    useEffect(() => {
        if (game !== '') {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }, [game]);

  return (
    <div className='GamesContainer'>
        {menu && <div className="menu">
        <h3 className="title">Games</h3>
        <p>Select A Game</p>
          <div className="games">
              <div className="game">
                  <button className="gameButton" onClick={() => setGame('RockPaperScissors')}>Rock Paper Scissors</button>
              </div>
              <div className="game">
                  <button className="gameButton" onClick={() => setGame('MemoryGame')}>Memory Game</button>
              </div>
              <div className="game">
                  <button className="gameButton" onClick={() => setGame('')}>Coming Soon!</button>
              </div>
              <div className="game">
                  <button className="gameButton" onClick={() => setGame('')}>Coming Soon!</button>
              </div>
          </div> 
        </div>}
    </div>
  )
}
