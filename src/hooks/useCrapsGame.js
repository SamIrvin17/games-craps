import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const useCrapsGame = () => {
    const { gameState, setGameState } = useContext(GameContext);

    const rollDice = () => {
        const dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        setGameState({ ...gameState, dice });
    };

    const setBetterId = (betterId) => setGameState({ ...gameState, currentBetterId: betterId });

    return {
        gameState,
        rollDice,
        setBetterId,
    };
};

export default useCrapsGame;
