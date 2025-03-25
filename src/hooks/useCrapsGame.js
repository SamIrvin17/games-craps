import { useContext } from 'react';
import { GameContext } from '../context/GameContext'; // Import context

const useCrapsGame = () => {
    const { gameState, setGameState } = useContext(GameContext); // Access context state and updater

    // Dice roll function
    const rollDice = () => {
        const dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        const total = dice[0] + dice[1]; // Calculate score from dice roll

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
        // puck is on
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
