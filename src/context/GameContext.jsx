// src/GameContext.jsx
import React, { createContext, useState } from 'react';

// 1. Create a context object
const GameContext = createContext();

// 2. Create a provider component to wrap the app
const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    dice: [1, 6],
    total: 7,
    isPuckOn: false,
    puckLocation: 5,
    message: 'Welcome to the Craps game!'
  });

  return (
    // 3. Provide the context value to the components inside
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

// 4. Export the GameContext object for consuming it in other components
export { GameContext, GameContextProvider };
