import React from 'react';

import { useSelector } from 'react-redux';

import '../styles/Outcome.scss';

function Outcome() {

    const hand = useSelector(state => state.hand)

    return (
        <div className="outcome">
            { (hand.length !== 0) ? hand.evaluate() : <h1>LOADING...</h1>}
        </div>
    )
}

export default Outcome
