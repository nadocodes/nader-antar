import React from 'react';
import RPSActionIcon from './RPSActionIcon';

interface RPSPlayerProps {
  name: string;
  score: number;
  action: string;
}

const RPSPlayer: React.FC<RPSPlayerProps> = ({name = 'Player', score = 0, action="rock"}) => {
  return (
    <div className='rps-player'>
      <div className="rps-score">{`${name}: ${score}`}</div>
      <div className='rps-choice-display'>
        {action && <RPSActionIcon action={action} size={60} />}
      </div>
    </div>
  )
}

export default RPSPlayer;
