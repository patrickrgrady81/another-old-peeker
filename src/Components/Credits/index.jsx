import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../../actions/bet';

import '../../styles/Credits.scss';

function Credits() {

    const credits = useSelector(state => state.credits); 
    const bet = useSelector(state => state.bet);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        switch (e.target.id) {
            case 'minus':
                if (bet !== 1){
                    dispatch(decrement());
                }
                break;
            case 'plus':
                if (bet !== 5) {
                    dispatch(increment());
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="credits">
            <div className="credits-wrapper">
                <div className="credits-label">CREDITS:</div>
                <div className="display-credits">{credits}</div>
            </div>
            <div className="current-bet">Current Bet</div>
            <div className="credit-controls">
                <div className="minus" id="minus" onClick={handleClick}>-</div>
                <div className="bet-amount">{bet}</div>
                <div className="plus" id="plus" onClick={handleClick}>+</div>
            </div>
        </div>
    )
}

export default Credits
