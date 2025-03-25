import React from "react";
import PuckSquare from "./PuckSquare";
import useCrapsGame from "../hooks/useCrapsGame";

const CrapsTable = () => {
  const { gameState, rollDice } = useCrapsGame();

  return (
    <div>
      <h2>{gameState.message} | Puck is: {gameState.isPuckOn ? gameState.puckLocation : 'OFF'}</h2>
      <h2>Dice: {gameState.dice[0]} - {gameState.dice[1]}</h2>
      <PuckSquare number={4} />
      <PuckSquare number={5} />
      <PuckSquare number={6} />
      <PuckSquare number={8} />
      <PuckSquare number={9} />
      <PuckSquare number={10} />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default CrapsTable;
