import React from 'react';
import { Score } from './Score';
import classNames from 'classnames';
import Ball from './Ball';
import styles from './ScoreBoard.module.css';

interface Props {
  score1: Score,
  score2: Score,
}

function ScoreBoard(props: Props) {
  const { score1, score2 } = props;

  return (
    <div className={styles.scoreBoard}>
      <div className={classNames(styles.side, styles.player1)}>
        {score1.points}

        <div className={classNames(styles.games, styles.games1)}>
          <div>{new Array(score1.games).fill(0).map(() => <Ball color="white" />)}</div>
        </div>

        <div className={styles.sets1}>
          <div>{new Array(score1.sets).fill(0).map(() => <Ball color="red" />)}</div>
        </div>
      </div>


      <div className={classNames(styles.side, styles.player2)}>
        {score2.points}

        <div className={classNames(styles.games, styles.games2)}>
          <div>{new Array(score2.games).fill(0).map(() => <Ball color="white" />)}</div>
        </div>

        <div className={styles.sets2}>
          <div>{new Array(score2.sets).fill(0).map(() => <Ball color="red" />)}</div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;