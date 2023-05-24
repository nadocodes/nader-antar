import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import RockPaperScissors from '../../components/Games/RockPaperScissors/RockPaperScissors';
import MemoryGame from '../../components/Games/MemoryGame/MemoryGame';
import './GamesConsole.css';

export default function Games() {
    const [menu, setMenu] = useState(true);
    const [game, setGame] = useState('');

    // Game ids
    const gamesId: string[] = ['RockPaperScissors', 'MemoryGame', '', '', ''];

    // Games database
    const gamesDB: any = {
        'RockPaperScissors': {
            comp: <RockPaperScissors />,
            name: 'Rock Paper Scissors'
        },
        'MemoryGame': {
            comp: <MemoryGame />,
            name: 'Memory Game'
        }       
    }
    
    // Set the menu to true and game to empty string
    const handleMenu = (): void => {
        setMenu(true);
        setGame('');
    }

    // Set the game to the selected game and menu to false
    const handleSelectGame = (gameSelected: string): void => {
        if (gameSelected === '') return;
        setGame(gameSelected);
        setMenu(false);
    }

    // Game selection buttons
    const gameSelectionButtons = gamesId.map((gameId, idx) => {
            return (
                <div key={`game: ${idx} ${gameId}`} className="game">
                    <button className="gameButton" onClick={() => handleSelectGame(gameId)}>{gamesDB[gameId] ? gamesDB[gameId].name : 'Coming Soon!'}</button>
                </div>
            )
    })

    return (
        <div className='gamesContainer'>
            <div className='gamesConsole'>
                {menu && <div className="menu">
                    <h3 className="menuTitle">Apps</h3>
                    <div className="games">
                        {gameSelectionButtons}
                    </div>
                </div>}
                {/* Display the selected game */}
                {gamesDB[game] ? gamesDB[game].comp : null}
            </div>
            <div className="controls">
                <button className="menuButton" onClick={handleMenu} aria-label='Return to game selection button'><AiFillHome /></button>
            </div>
        </div>
    )
}
