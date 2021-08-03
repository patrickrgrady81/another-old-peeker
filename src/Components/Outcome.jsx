import React from 'react';

import { useSelector } from 'react-redux';

import '../styles/Outcome.scss';

function Outcome() {

    const hand = useSelector(state => state.hand)

    return (
        <div className="outcome">
            {hand.evaluate()}
        </div>
    )
}

export default Outcome
