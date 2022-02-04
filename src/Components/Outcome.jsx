import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setHandValue, getHandValue } from '../actions/handValue';

import '../styles/Outcome.scss';

function Outcome() {


    const dispatch = useDispatch();
    const hand = useSelector(state => state.hand);
    const gameState = useSelector(state => state.gameState);

    if (gameState !== 'START') {
        dispatch(setHandValue(hand.evaluate()[0]));
        console.log(dispatch(getHandValue()));
        return (
            <div className="outcome">
                { (hand.length !== 0) ? hand.evaluate()[1] : <h1>LOADING...</h1> }
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
