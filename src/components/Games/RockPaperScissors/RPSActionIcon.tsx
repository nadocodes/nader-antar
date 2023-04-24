import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa';

type RPSActionIconProps = {
  action: string;
  size: number;
};

function RPSActionIcon({ action, ...props }: RPSActionIconProps) {
  const icons: any = {
    paper: FaHandPaper,
    scissors: FaHandScissors,
    rock: FaHandRock,
    lizard: FaHandLizard,
    spock: FaHandSpock,
  };

  const Icon = icons[action];
  return <Icon {...props} />;
}

export default RPSActionIcon;
