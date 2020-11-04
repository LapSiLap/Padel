import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Components/Header/Header';
import ScoreBoard from './Components/Score/ScoreBoard';
import useScore from './hooks/useScore';
import styles from './App.module.css';

declare const window: any;

function App() {
  const {
    score1,
    score2,
    incScore,
  } = useScore();

  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    window.PadelApp = {
      incScore: (player: number) => {
        if (gameStarted) {
          incScore(player);
        }
      },
    }
  }, [gameStarted])

  function renderDevHelper() {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className={styles.helperButtons}>
          <Button onClick={() => incScore(1)}>1</Button>
          <Button onClick={() => incScore(2)}>2</Button>
        </div>
      );
    }
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        {        
          gameStarted
            ? <ScoreBoard score1={score1} score2={score2} />
            : <Button color="primary" variant="contained" onClick={() => { setGameStarted(true) }}>Start game</Button>
        }        
      </div>

      { renderDevHelper() }
    </div>
  );
}

export default App;
