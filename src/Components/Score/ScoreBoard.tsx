import React from 'react';
import { Score } from './Score';

interface Props {
  score1: Score,
  score2: Score,
}

function ScoreBoard(props: Props) {
  const { score1, score2 } = props;

  return (
    <div className="Score-board">
      <div className="Score">
        <div className="Ball-container">
            <div className="Red-ball" /><div className="Red-ball" /><div className="Red-ball" />
        </div>
        <div className="Ball-container">
            <div className="White-ball" /><div className="White-ball" /><div className="White-ball" /><div className="White-ball" /><div className="White-ball" /><div className="White-ball" />
        </div>
        { score1.points }
      </div>
      <div className="Score">{ score2.points }!</div>
    </div>
  );
}

export default ScoreBoard;