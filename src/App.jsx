// src/App.jsx
import React from 'react';
import { GameContextProvider } from './context/GameContext'; // Import the provider
import './App.css';
import CrapsTable from './components/CrapsTable';

const App = () => {
  return (
    <div>
    <GameContextProvider>
      <div className="App">
        <h1>Craps Game</h1>
        <CrapsTable />
      </div>
    </GameContextProvider>
    </div>

  );
};

export default App;
