import { useEffect, useState } from 'react';
import { Score } from '../Components/Score/Score';

const points = [
  '0',
  '15', 
  '30', 
  '40'
];

const numberOfSets = 6;

function getPointsString(points1: number, points2: number) : string {
  if (points1 >= 3 && points2 >= 3) {
    if (points1 === points2) {
      return points[3];
    }
    return points1 >= points2 ? 'ADV' : points[3];
  }

  return points[points1];
}

function pointsWinsOver(a: number, b: number) : boolean {
  return a >= points.length && b <= a - 2;
}

function gamesWinsOver(a: number, b: number) : boolean {
  return a >= numberOfSets && b <= a - 2;
}

function useScore() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [games1, setGames1] = useState(0);
  const [games2, setGames2] = useState(0);
  const [sets1, setSets1] = useState(0);
  const [sets2, setSets2] = useState(0);
  const resetPoints = () => {
    setPoints1(0);
    setPoints2(0);
  }
  
  const resetGames = () => {
    setGames1(0);
    setGames2(0);
  }

  function incScore(player: number) {
    const setPointsFunction = player === 1 ? setPoints1 : setPoints2;
    setPointsFunction(p => p + 1);
  }

  // Check points
  useEffect(() => {
    if (pointsWinsOver(points1, points2)) {
      setGames1(g => g + 1)
      resetPoints();
    } else if (pointsWinsOver(points2, points1)) {
      setGames2(g => g + 1)
      resetPoints();
    }
  }, [points1, points2])

  useEffect(() => {
    if (gamesWinsOver(games1, games2)) {
      setSets1(s => s + 1)
      resetGames();
    } else if (gamesWinsOver(games2, games1)) {
      setSets2(s => s + 1)
      resetGames();
    }
  }, [games1, games2])

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
