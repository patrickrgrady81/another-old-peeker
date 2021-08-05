import React from 'react';

import { useSelector } from 'react-redux';

import '../styles/Outcome.scss';

function Outcome() {

    const hand = useSelector(state => state.hand);
    const gameState = useSelector(state => state.gameState);

    if (gameState !== 'START') {
        return (
            <div className="outcome">
                { (hand.length !== 0) ? hand.evaluate() : <h1>LOADING...</h1> }
            </div>
        )
    } else {
        return (
            <>
            <div className="outcome">PLACE YOUR BET<br />AND PRESS START</div>
            </>
        )
    }
}

export default Outcome
