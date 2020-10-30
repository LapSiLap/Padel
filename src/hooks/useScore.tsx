import { useState } from 'react';
import { Score } from '../Components/Score/Score';

const points = [
  '0',
  '15', 
  '30', 
  '40'
];

function getPointsString(points1: number, points2: number) : string {
  if (points1 >= 3 && points2 >= 3) {
    if (points1 === points2) {
      return points[3];
    }
    return points1 >= points2 ? 'ADV' : points[3];
  }

  return points[points1];
}

function useScore() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [games1, setGames1] = useState(0);
  const [games2, setGames2] = useState(0);
  const [sets1, setSets1] = useState(0);
  const [sets2, setSets2] = useState(0);

  function incScore(player: number) {
    const setScoreFunction = player === 1 ? setPoints1 : setPoints2;
    setScoreFunction(score => score + 1);
  }

  const score1 : Score = {
    points: getPointsString(points1, points2),
    games: games1,
    sets: sets1,
  };

  const score2 : Score = {
    points: getPointsString(points2, points1),
    games: games2,
    sets: sets2,
  };

  return {
    incScore,
    score1,
    score2,
  }
}

export default useScore;
