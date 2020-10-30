import React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Components/Header/Header';
import ScoreBoard from './Components/Score/ScoreBoard';
import useScore from './hooks/useScore';
import './App.css';

function App() {
  const {
    score1,
    score2,
    incScore,
  } = useScore();

  return (
    <div className="Wrapper">
      <div className="Content">
        <Header />

        <ScoreBoard score1={score1} score2={score2} />
      </div>

      <div className="Score-buttons">
        <Button
            size="small" 
            variant="contained" 
            color="secondary"
            onClick={() => {
              incScore(1);
            }}
        >
            +1
        </Button>

        <Button
            size="small" 
            variant="contained" 
            color="secondary"
            onClick={() => {
              incScore(2);
            }}
        >
            +1
        </Button>
      </div>
    </div>
  );
}

export default App;
