import React from 'react';
import useCrapsGame from '../hooks/useCrapsGame';

const PuckSquare = ({ number }) => {
    const { gameState } = useCrapsGame();
    const { isPuckOn, puckLocation} = gameState;

    return (
        <div className={`puck-square ${isPuckOn && puckLocation === number ? 'puck-on' : ''}`}>
            {number}
        </div>
    );

}

export default PuckSquare;