import React, { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import RockPaperScissors from '../../components/Games/RockPaperScissors/RockPaperScissors'
import './GamesConsole.css';

export default function Games() {
    const [menu, setMenu] = useState(true);
    const [game, setGame] = useState('');
    const [gameName, setGameName] = useState(['Rock Paper Scissors', 'Memory Game']);
    const [gamesId, setGamesId] = useState(['RockPaperScissors', 'MemoryGame', '', '']);

    useEffect(() => {
        if (game) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }, [game]);

    const handleMenu = (): void => {
        setMenu(true);
        setGame('');
    }

    return (
        <div className='gamesContainer'>
            <div className='gamesConsole'>
                {menu && <div className="menu">
                    <h3 className="menuTitle">Mini Games</h3>
                    <p className="menuText">Select A Game</p>
                    <div className="games">
                        {gamesId.map((gameId, idx) => {
                            if (gameId){
                            return (
                                <div className="game">
                                    <button className="gameButton" onClick={() => setGame(gameId)}>{gameName[idx]}</button>
                                </div>
                            )} else {
                                return (
                                    <div className="game">
                                        <button className="gameButton" onClick={() => setGame('')}>Coming Soon!</button>
                                    </div>
                                )
                            }
                        })
                        }

                    </div>
                </div>}
            {game === 'RockPaperScissors' && <RockPaperScissors />}
            </div>
            <div className="controls">
                <button className="menuButton" onClick={handleMenu}><AiFillHome /></button>
            </div>
        </div>
    )
}
