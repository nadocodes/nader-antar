import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import RPSActionIcon from './RPSActionIcon'

type RPSActionButtonProps = {
  action: string,
  onActionSelected: (selectedAction: string) => void
}

const RPSActionButton = ({action = 'rock', onActionSelected}: RPSActionButtonProps) => {
  return (
    <button className='rps-choice-btn' onClick={() => onActionSelected(action)} >
        <RPSActionIcon action={action} size={20} />
    </button>
  )
}

export default RPSActionButton;
