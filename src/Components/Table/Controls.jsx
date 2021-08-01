import React from 'react'
import { useDispatch } from 'react-redux';

import { betOne, betMax } from '../../actions'

import '../../styles/Controls.scss';

function Controls() {

    const dispatch = useDispatch();

    const handleButton = (e) => {
        switch (e.target.id){
            case 'bet-one':
                console.log('BET ONE');
                dispatch(betOne());
                break;
            case 'draw':
                console.log('DRAW');
                break;
            case 'bet-max':
                dispatch(betMax());
                console.log('BET MAX');
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
