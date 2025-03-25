import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    dice: [1, 6],
    total: 7,
    isPuckOn: false,
    puckLocation: 5,
    message: 'Welcome to the Craps game!'
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
