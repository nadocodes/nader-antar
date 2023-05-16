import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import RockPaperScissors from '../../components/Games/RockPaperScissors/RockPaperScissors';
import './GamesConsole.css';

export default function Games() {
    const [menu, setMenu] = useState(true);
    const [game, setGame] = useState('');

    // Names of games
    const gameName: string[] = ['Rock Paper Scissors', 'Memory Game'];

    // Ids of each game
    const gamesId: string[] = ['RockPaperScissors', 'MemoryGame', '', '', ''];

    // Games components list
    const games: any = {
        'RockPaperScissors': <RockPaperScissors />,
    }
    
    // Set the menu to true and game to empty string
    const handleMenu = (): void => {
        setMenu(true);
        setGame('');
    }

    // Set the game to the selected game and menu to false
    const handleSelectGame = (gameSelected: string): void => {
        setGame(gameSelected);
        setMenu(false);
    }

    return (
        <div className='gamesContainer'>
            <div className='gamesConsole'>
                {menu && <div className="menu">
                    <h3 className="menuTitle">Mini Games</h3>
                    <div className="games">
                        {gamesId.map((gameId, idx) => {
                            if (gameId && gameName[idx]){
                                return (
                                    <div key={`game: ${idx} ${gameId}`} className="game">
                                        <button className="gameButton" onClick={() => handleSelectGame(gameId)}>{gameName[idx]}</button>
                                    </div>
                                )} else {
                                    return (
                                        <div key={`game: ${idx} ${gameId}`} className="game">
                                            <button className="gameButton" onClick={() => setGame('')}>Coming Soon!</button>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>}
                {/* Display the selected game */}
                {games[game]}
            </div>
            <div className="controls">
                <button className="menuButton" onClick={handleMenu} aria-label='Return to game selection button'><AiFillHome /></button>
            </div>
        </div>
    )
}
