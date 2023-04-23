import React from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import RPSActionIcon from './RPSActionIcon'

const RPSActionButton = ({action = 'rock', onActionSelected}) => {
  return (
    <button className='rounded-btn' onClick={() => onActionSelected(action)} >
        <RPSActionIcon action={action} size={20} />
    </button>
  )
}

export default RPSActionButton