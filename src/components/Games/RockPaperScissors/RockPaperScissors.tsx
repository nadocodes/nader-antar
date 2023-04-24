import React, { useState } from 'react'
import RPSPlayer from './RPSPlayer'
import RPSActionButton from './RPSActionButton'
import RPSGetWinner from './RPSGetWinner'
import './RockPaperScissors.css'

function RockPaperScissors(): JSX.Element {
  const [playerScore, setPlayerScore] = useState<number>(0)
  const [computerScore, setComputerScore] = useState<number>(0)
  const [playerAction, setPlayerAction] = useState<string>('')
  const [computerAction, setComputerAction] = useState<string>('')
  const [winner, setWinner] = useState<number>(3)
  const [round, setRound] = useState<number>(0)

  const actions: Record<string, string[]> = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
  };
  
  const randomAction = (): string => {
    const actionsArray = Object.keys(actions);
    const randomIndex = Math.floor(Math.random() * actionsArray.length);
    return actionsArray[randomIndex];
  }

  const onActionSelected = (selectedAction: string): void => {
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

  const calculateWinner = (playerAction: string, computerAction: string): number => {
    if (playerAction === computerAction) {
      return 0;
    } else if (actions[playerAction].includes(computerAction)) {
      return -1;
    } else if (actions[computerAction].includes(playerAction)) {
      return 1;
    }
    return 3;
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

export default RockPaperScissors;
