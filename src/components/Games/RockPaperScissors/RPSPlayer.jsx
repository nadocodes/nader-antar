import React from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import RPSActionIcon from './RPSActionIcon'

const RPSPlayer = ({name = 'Player', score = 0, action="rock"}) => {
  return (
    <div className='player'>
        <div className="score">{`${name}: ${score}`}</div>
        <div className='action'>
          {action && <RPSActionIcon action={action} size={60} />}
        </div>    
    </div>
  )
}

export default RPSPlayer