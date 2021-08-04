import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { betOne, betMax } from '../../actions/bet';
import { removeCredits } from '../../actions/credits';
import { changeGameState } from '../../actions/gameState';

import '../../styles/Controls.scss';

function Controls() {

    const dispatch = useDispatch();
    const bet = useSelector(state => state.bet);
    const gameState = useSelector(state => state.gameState);

    const handleButton = (e) => {
        if (gameState !== 'DRAW') {
            switch (e.target.id){
                case 'bet-one':
                    dispatch(betOne());
                    if (gameState !== 'DRAW') dispatch(removeCredits(1));
                    dispatch(changeGameState());
                    break;
                case 'draw':
                    switch (gameState) {
                        case 'START':
                            dispatch(removeCredits(bet));
                            dispatch(changeGameState());
                            break;
                        case 'DRAW':
                            console.log('draw new cards');
                            dispatch(changeGameState());
                            break;
                        case 'DEAL':
                            console.log('get new hand');
                            dispatch(removeCredits(bet));
                            dispatch(changeGameState());
                            break;
                        default: 
                            break;
                    }
                    break;
                case 'bet-max':
                    dispatch(betMax());
                    if (gameState !== 'DRAW') dispatch(removeCredits(5));
                    dispatch(changeGameState());
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className="controls">
            <div className="bet-one" onClick={handleButton} id='bet-one'>bet one</div>
            <div className="draw" onClick={handleButton} id='draw'>{gameState}</div>
            <div className="bet-max" onClick={handleButton} id='bet-max'>bet max</div>
        </div>
    )
}

export default Controls
