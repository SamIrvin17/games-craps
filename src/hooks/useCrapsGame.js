import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import getBetsByType from '../common/helper/getBetsByType';

const useCrapsGame = () => {
    const { gameState, setGameState } = useContext(GameContext);

    const rollDice = () => {
        const dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        setGameState({ ...gameState, dice });
    };

    const setBetterId = (betterId) => setGameState({ ...gameState, currentBetterId: betterId });

    const setBetType = (betType) => setGameState({ ...gameState, currentBetType: betType });

    const placeBet = (amount) => {
        const playerIndex = gameState.players.findIndex(player => player.id === gameState.currentBetterId);
        const player = gameState.players[playerIndex];

        const currentBetsOfSameType = getBetsByType(gameState.bets, gameState.currentBetType);

        if (player.balance < amount){
            setGameState({ ...gameState, message: "Not enough money to place bet" });
            return;
        }

        if (currentBetsOfSameType.filter(bet => bet.playerId === gameState.currentBetterId).length > 0) {
            setGameState({ ...gameState, message: "You already have a bet of this type" });
            return;
        }

        const updatePlayers = [...gameState.players];
        updatePlayers[playerIndex] = {
            ...player,
            balance: player.balance - amount,
        };

        const updatedBets = {
            ...gameState.bets,
            [gameState.currentBetType]: [
                ...gameState.bets[gameState.currentBetType],
                { playerId: gameState.currentBetterId, amount },
            ],
        };

        setGameState({
            ...gameState,
            players: updatePlayers,
            bets: updatedBets,
            message: "Bet placed successfully"
        });
    }

    return {
        gameState,
        placeBet,
        rollDice,
        setBetterId,
        setBetType
    };
};

export default useCrapsGame;
