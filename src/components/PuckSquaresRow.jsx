import React from 'react';
import PuckSquare from './PuckSquare';
import useCrapsGame from '../hooks/useCrapsGame';

const PuckSquaresRow = () => {
  const puckNumbers = [4, 5, 6, 8, 9, 10];
  const { gameState } = useCrapsGame();
  const { isPuckOn } = gameState;

  return (
    <div className="flex justify-between space-x-4 py-4 bg-green-700 px-8 rounded-lg">
      {/* fix later but off puck is in the top left of the screen not this container, when fixing puck set bg-white to see it*/}
      {!isPuckOn && (
        <div className="static top-2 left-2 w-8 h-8 bg-black rounded-full" > OFF </div>
      )}
      {puckNumbers.map((number) => (
        <PuckSquare key={number} number={number} />
      ))}
    </div>
  );
};

export default PuckSquaresRow;
