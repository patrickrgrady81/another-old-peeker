import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { betOne, betMax } from '../../actions/bet';
import { removeCredits } from '../../actions/credits';

import '../../styles/Controls.scss';

function Controls() {

    const dispatch = useDispatch();
    const bet = useSelector(state => state.bet);

    const handleButton = (e) => {
        switch (e.target.id){
            case 'bet-one':
                dispatch(betOne());
                break;
            case 'draw':
                console.log(`sending ${bet} credits to action removeCredits`);
                dispatch(removeCredits(bet))
                break;
            case 'bet-max':
                dispatch(betMax());
                break;
            default:
                break;
        }
    }

    return (
        <div className="controls">
            <div className="bet-one" onClick={handleButton} id='bet-one'>bet one</div>
            <div className="draw" onClick={handleButton} id='draw'>draw</div>
            <div className="bet-max" onClick={handleButton} id='bet-max'>bet max</div>
        </div>
    )
}

export default Controls
