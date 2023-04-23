import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa';

function RPSActionIcon({action, ...props}) {
    const icons = {
        paper: FaHandPaper,
        scissors: FaHandScissors,
        rock: FaHandRock,
        lizard: FaHandLizard,
        spock: FaHandSpock,
    };
    const Icon = icons[action]
    return (
    <Icon {...props} />
    )
}

export default RPSActionIcon;