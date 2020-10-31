import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Components/Header/Header';
import ScoreBoard from './Components/Score/ScoreBoard';
import useScore from './hooks/useScore';
import './App.css';

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

  return (
    <div className="Wrapper">
      <div className="Content">
        <Header />

        {
          gameStarted
            ? <ScoreBoard score1={score1} score2={score2} />
            : <Button color="primary" variant="contained" onClick={() => { setGameStarted(true) }}>Start game</Button>
        }        
      </div>
    </div>
  );
}

export default App;
