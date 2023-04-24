import React from 'react';

interface Props {
  winner: number;
}

const RPSGetWinner: React.FC<Props> = ({ winner = 0 }) => {
  const text: { [key: number]: string } = {
    '-1': 'You Win!',
    '1': 'You Lose!',
    '0': "It's a Draw!",
  };
  return <h3>{text[winner]}</h3>;
};

export default RPSGetWinner;