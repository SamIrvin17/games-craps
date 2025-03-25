import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const useCrapsGame = () => {
    const { gameState, setGameState } = useContext(GameContext);

    const rollDice = () => {
        const dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        const total = dice[0] + dice[1];

        // puck off
        if (!gameState.isPuckOn) {
            // win
            if (total === 7 || total === 11) {
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You win!' });
            }
            // crap out
            else if (total === 2 || total === 3 || total === 12) {
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You lose!' });
            }
            // turn puck on
            else {
                setGameState({ ...gameState, dice, isPuckOn: true, puckLocation: total, message: total });
            }
        }
        // puck on
        else {
            // win
            if (total === gameState.puckLocation) {
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You win!' });
            }
            // crap out
            else if (total === 7) {
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You lose!' });
            }
            // continue
            else {
                setGameState({ ...gameState, dice, message: total });
            }
        };
    };

    return {
        gameState,
        rollDice,
    };
};

export default useCrapsGame;
