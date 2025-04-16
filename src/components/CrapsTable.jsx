import React from "react";
import PuckSquaresRow from "./PuckSquaresRow";
import Dice from "./Dice";
import useCrapsGame from "../hooks/useCrapsGame";
import betType from "../common/BetType";

const CrapsTable = () => {
  const { gameState, placeBet, rollDice, setBetterId, setBetType } = useCrapsGame();

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
      <h3>Player 1: {gameState.players[0].balance} | Player 2: {gameState.players[1].balance} | Player 3: {gameState.players[2].balance}</h3>
      <h3>Selected Player: {gameState.currentBetterId} | Bet Type {gameState.currentBetType === 0 ? 'Pass Line ' : 'Don\'t Pass Line'}</h3>
      <h2>Dice: {gameState.dice[0]} - {gameState.dice[1]}</h2>
      
      <PuckSquaresRow />

      <div
        onClick={() => {
          setBetType(betType.DONT_PASS_LINE);
          placeBet(25);
        }}
        className = "bg-green-700 rounded-lg h-12 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-green-600 transition"
      >
        {/* Pass line */}
        <span className="font-bold text-lg text-white">Don't Pass Line</span>
      </div>

      <div
        onClick={() => {
          setBetType(betType.PASS_LINE);
          placeBet(25);
        }}
        className = "bg-green-700 rounded-lg h-12 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-green-600 transition"
      >
        {/* Pass line */}
        <span className="font-bold text-lg text-white">Pass Line</span>
      </div>

      <div className="flex space-x-4 py-4"> {/* Flex container with horizontal spacing */}
        <Dice value={gameState.dice[0]} />
        <Dice value={gameState.dice[1]} />
      </div>

      <button
        className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-gray-900 text-white cursor-pointer transition-colors hover:border-gray-500"
        onClick={rollDice}
      >
        Roll Dice
      </button>

      <div className="flex space-x-4 py-4 justify-center">
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-red-500 text-white cursor-pointer transition-colors hover:bg-red-600"
          onClick={() => setBetterId("Player1")}  
        >
          Player 1
        </button>
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-blue-500 text-white cursor-pointer transition-colors hover:bg-blue-600"
          onClick={() => setBetterId("Player2")}  
        >
          Player 2
        </button>
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-green-500 text-white cursor-pointer transition-colors hover:bg-green-600"
          onClick={() => setBetterId("Player3")}  
        >
          Player 3
        </button>

      </div>
    </div>
  );
};

export default CrapsTable;
