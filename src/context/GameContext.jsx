import React, { createContext, useState } from 'react';

const GameContext = createContext();

/***
 * Game State
 * 
 * players: player[]
 * isPuckOn: boolean
 * puckLocation: number?
 * currentBetterId: string,
 * currentBetType: enum?,
 * dice: [number, number]
 * message: string?
 * 
 * 
 * Player
 * 
 * id: string
 * name: string
 * color: color enum
 * balance: number
 * bets: bet[]
 * 
 * Bet
 * 
 * type: bet enum
 * amount: number
 * location: number // where the bet got placed like come bet on 8
 * 
 */

const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    players: [
      {
        id: 'Player1',
        name: 'Sam',
        color: 'red',
        balance: 1000,
        bets: [],
      },
      {
        id: 'Player2',
        name: 'Bryan',
        color: 'blue',
        balance: 1000,
        bets: [],
      },
      {
        id: 'Player3',
        name: 'Chris',
        color: 'green',
        balance: 1000,
        bets: [],
      }
    ],
    
    dice: [1, 6],
    isPuckOn: false,
    puckLocation: 5,
    currentBetterId: 'Player1',
    currentBetType: null,
    message: 'Welcome to the Craps game!',

    bets: {
      passBets: [],
      dontPassBets: [],
    }

  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
