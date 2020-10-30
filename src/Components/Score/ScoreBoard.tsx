import React from 'react';
import Ball from './Ball';
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
            <Ball color="red" />
        </div>
        <div className="Ball-container">
            <Ball color="white" />
        </div>
        { score1.points }
      </div>
      <div className="Score">
        <div className="Ball-container">
            <Ball color="red" />
        </div>
        <div className="Ball-container">
            <Ball color="white" />
        </div>
        { score2.points }
      </div>
    </div>
  );
}

export default ScoreBoard;