import { useState } from 'react'
import RPSPlayer from './RPSPlayer'
import RPSActionButton from './RPSActionButton'
import RPSGetWinner from './RPSGetWinner'
import './RockPaperScissors.css'

function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [playerAction, setPlayerAction] = useState('')
  const [computerAction, setComputerAction] = useState('')
  const [winner, setWinner] = useState('')
  const [round, setRound] = useState(0)

  const actions = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
  };
  
  const randomAction = () => {
    const actionsArray = Object.keys(actions);
    const randomIndex = Math.floor(Math.random() * actionsArray.length);
    return actionsArray[randomIndex];
  }

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);
    const computerSelectedAction = randomAction();
    setComputerAction(computerSelectedAction);
    const newWinner = calculateWinner(selectedAction, computerSelectedAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    }
    if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
    setRound(round + 1);
  }

  const calculateWinner = (playerAction, computerAction) => {
    if (playerAction === computerAction) {
      return 0;
    } else if (actions[playerAction].includes(computerAction)) {
      return -1;
    } else if (actions[computerAction].includes(playerAction)) {
      return 1;
    }
    return null;
  }

  

  return (
    <div className="RockPaperScissors">
      <h3 className="gameTitle">Rock Paper Scissors</h3>
      <div>
        <div className='container'>
            <RPSPlayer name='Player' score={playerScore} action={playerAction} />
            <RPSPlayer name='Computer' score={computerScore} action={computerAction} />
        </div>
        <div>
          <RPSActionButton action='rock' onActionSelected={onActionSelected} />
          <RPSActionButton action='paper' onActionSelected={onActionSelected} />
          <RPSActionButton action='scissors' onActionSelected={onActionSelected} />
          <RPSActionButton action='lizard' onActionSelected={onActionSelected} />
          <RPSActionButton action='spock' onActionSelected={onActionSelected} />

        </div>
        <RPSGetWinner winner={winner} />
      </div>
    </div>
  )
}

export default RockPaperScissors
