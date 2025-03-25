import React from "react";
import PuckSquare from "./PuckSquare";
import useCrapsGame from "../hooks/useCrapsGame";

const CrapsTable = () => {
  const { gameState, rollDice } = useCrapsGame();

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
