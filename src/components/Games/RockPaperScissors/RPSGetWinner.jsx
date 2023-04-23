import React from 'react'

const RPSGetWinner = ({winner = 0}) => {
    const text = {
        "-1": 'You Win!',
        1: 'You Lose!',
        0: "It's a Draw!",
    };
    return(<h3>{text[winner]}</h3>);
}

export default RPSGetWinner