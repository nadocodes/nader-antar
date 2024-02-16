import React, { useEffect, useState } from 'react';
import { IoBatteryHalfOutline } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import RockPaperScissors from '../../components/Games/RockPaperScissors/RockPaperScissors';
import MemoryGame from '../../components/Games/MemoryGame/MemoryGame';
// import MinimalisticSamurai from '../../assets/minimalistic-samurai.1920x1080.mp4';
import './GamesConsole.css';

export default function Games() {
    const [menu, setMenu] = useState(true);
    const [game, setGame] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    }, [])
    
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
            <div className='taskBar'>
                <div className="date">
                    <div>{date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'})}</div>
                    <div>{date.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long'})}</div>
                    <IoBatteryHalfOutline size={20}/>
                </div>
            </div>
                {/* <video className='consoleBG'autoPlay muted loop>
                    <source src={MinimalisticSamurai} type="video/mp4" />
                </video> */}
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
