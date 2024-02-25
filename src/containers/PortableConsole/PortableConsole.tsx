import React, { useEffect, useState } from 'react';
import { IoBatteryHalfOutline } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import RockPaperScissors from '../../components/Applications/RockPaperScissors/RockPaperScissors';
import MemoryGame from '../../components/Applications/MemoryGame/MemoryGame';
import WeatherApp from '../../components/Applications/WeatherApp/WeatherApp';
// import MinimalisticSamurai from '../../assets/minimalistic-samurai.1920x1080.mp4';
import './PortableConsole.css';

export default function PortableConsole() {
    const [menu, setMenu] = useState(true);
    const [app, setApp] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    }, [])
    
    // App ids
    const appsId: string[] = ['RockPaperScissors', 'MemoryGame', 'WeatherApp', '', ''];

    // Games database
    const appsDB: any = {
        'RockPaperScissors': {
            comp: <RockPaperScissors />,
            name: 'Rock Paper Scissors'
        },
        'MemoryGame': {
            comp: <MemoryGame />,
            name: 'Memory Game'
        },
        'WeatherApp': {
            comp: <WeatherApp />,
            name: 'Weather App'
        }
    }
    
    // Set the menu to true and app to empty string
    const handleMenu = (): void => {
        setMenu(true);
        setApp('');
    }

    // Set the app to the selected app and menu to false
    const handleSelectApp = (appSelected: string): void => {
        if (appSelected === '') return;
        setApp(appSelected);
        setMenu(false);
    }

    // App selection buttons
    const appSelectionButtons = appsId.map((appId, idx) => {
            return (
                <div key={`app: ${idx} ${appId}`} className="apps-item">
                    <button className="appButton" onClick={() => handleSelectApp(appId)}>{appsDB[appId] ? appsDB[appId].name : 'Coming Soon!'}</button>
                </div>
            )
    })
    

    return (
        <div className='appsContainer'>
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
            <div className='appsConsole'>
                {menu && <div className="menu">
                    <h3 className="menuTitle">Apps</h3>
                    <div className="apps">
                        {appSelectionButtons}
                    </div>
                </div>}
                {/* Display the selected app */}
                {appsDB[app] ? appsDB[app].comp : null}
            </div>
            <div className="controls">
                <button className="menuButton" onClick={handleMenu} aria-label='Return to app selection button'><AiFillHome /></button>
            </div>
        </div>
    )
}
