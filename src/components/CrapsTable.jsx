import React from "react";
import PuckSquaresRow from "./PuckSquaresRow";
import Dice from "./Dice";
import useCrapsGame from "../hooks/useCrapsGame";

const CrapsTable = () => {
  const { gameState, rollDice, betPass } = useCrapsGame();

 // Eventually put these puck swaures into a bigger container for all the number spots
 // container for place and buy
 // Container for the puck squares
 // container for come and don't come
 // container for field
 // container for don't pass and pass
 // container for side bets

  return (
    <div>
      <h2>{gameState.message} | Puck is: {gameState.isPuckOn ? gameState.puckLocation : 'OFF'}</h2>
      <h3>Money: {gameState.score} | Current Bet: {gameState.currentBet}</h3>
      <h2>Dice: {gameState.dice[0]} - {gameState.dice[1]}</h2>
      <PuckSquaresRow />
      <div className = "bg-green-700 rounded-lg h-12 border-2 border-white">
        {/* Pass line */}
        <span className="font-bold text-lg text-white">Pass Line</span>
      </div>
      <button
          onClick={betPass}
          className="bg-green-700 rounded-lg h-12 border-2 border-white font-bold text-lg text-white"
      >
        Bet Pass
      </button>
      <div className="flex space-x-4 py-4"> {/* Flex container with horizontal spacing */}
        <Dice value={gameState.dice[0]} />
        <Dice value={gameState.dice[1]} />
      </div>
      <button
          onClick={rollDice}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
      >
        Roll Dice
      </button>
    </div>
  );
};

export default CrapsTable;
