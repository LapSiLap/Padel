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
    <div>
      {
        JSON.stringify(score1)
      }
      <br />
      {
        JSON.stringify(score2)
      }
    </div>
  );
}

export default ScoreBoard;