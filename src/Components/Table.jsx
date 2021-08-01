import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { betOne, betFive } from '../actions'

import '../styles/Table.scss'

function Table() {

    const bet = useSelector(state => state.bet);
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
                dispatch(betFive());
                console.log('BET MAX');
                break;
            default:
                break;
        }
    }

    return (
        <div className="table">
            <div className="cards"></div>
            <div className="hold-buttons"></div>
            <div className="controls">
                <div className="bet-one" onClick={handleButton} id='bet-one'>bet one</div>
                <div className="draw" onClick={handleButton} id='draw'>draw</div>
                <div className="bet-max" onClick={handleButton} id='bet-max'>bet max</div>
            </div>
        </div>
    )
}

export default Table
