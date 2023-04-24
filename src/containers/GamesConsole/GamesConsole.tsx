import React, { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import RockPaperScissors from '../../components/Games/RockPaperScissors/RockPaperScissors'
import './GamesConsole.css';

export default function Games() {
    const [menu, setMenu] = useState(true);
    const [game, setGame] = useState('');

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
            {game === 'RockPaperScissors' && <div className="gameDisplay"><RockPaperScissors /></div>}
            </div>
            <div className="controls">
                <button className="menuButton" onClick={handleMenu}><AiFillHome /></button>
            </div>
        </div>
    )
}
