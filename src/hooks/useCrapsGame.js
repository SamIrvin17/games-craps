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
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You win!', score: gameState.score + (gameState.currentBet * 2), currentBet: 0, isbettingPass: false, });
            }
            // crap out
            else if (total === 2 || total === 3 || total === 12) {
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You lose!', currentBet: 0, isbettingPass: false, });
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
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You win!', score: gameState.score + (gameState.currentBet * 2), currentBet: 0, isbettingPass: false });
            }
            // crap out
            else if (total === 7) {
                setGameState({ ...gameState, dice, isPuckOn: false, message: 'You lose!', currentBet: 0, isbettingPass: false });
            }
            // continue
            else {
                setGameState({ ...gameState, dice, message: total });
            }
        };
    };

    const betPass = () => {
        setGameState({ ...gameState, currentBet: 25, score: gameState.score - 25, isbettingPass: true });
    }

    return {
        gameState,
        rollDice,
        betPass,
    };
};

export default useCrapsGame;
