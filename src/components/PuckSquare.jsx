import React from 'react';
import useCrapsGame from '../hooks/useCrapsGame';

const PuckSquare = ({ number }) => {
  const { gameState } = useCrapsGame();
  const { isPuckOn, puckLocation } = gameState;

  return (
    <div
      className={`puck-square relative flex items-center justify-center p-4 border-2 border-green-800 rounded-lg
        ${isPuckOn && puckLocation === number ? 'bg-green-600' : 'bg-green-500'}`}
    >

      <span className="font-bold text-lg text-white">{number}</span>

      {/* Display the craps puck on the square when the puck is on it */}
      {isPuckOn && puckLocation === number && (
        <div className="absolute w-8 h-8 bg-white rounded-full shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* This can be replaced with an image or other design for the puck */}
        </div>
      )}
    </div>
  );
};

export default PuckSquare;
