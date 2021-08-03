import React from 'react';
import { useDispatch } from 'react-redux'

import { changeHolds } from '../../actions/holds';

import '../../styles/HoldButtons.scss';

function HoldButttons() {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        let id = Number(e.target.id);

        if (e.target.classList.contains('light-red')) {
            e.target.classList.remove('light-red');
            e.target.classList.add('dark-red');
            dispatch(changeHolds(id));
        } else {
            e.target.classList.remove('dark-red');
            e.target.classList.add('light-red');
            dispatch(changeHolds(id));
        }
    }

    return (
        <div className="hold-buttons">
            <div className="hold-button light-red" id="0" onClick={handleClick}>HOLD</div>
            <div className="hold-button light-red" id="1" onClick={handleClick}>HOLD</div>
            <div className="hold-button light-red" id="2" onClick={handleClick}>HOLD</div>
            <div className="hold-button light-red" id="3" onClick={handleClick}>HOLD</div>
            <div className="hold-button light-red" id="4" onClick={handleClick}>HOLD</div>
        </div>
    )
}

export default HoldButttons
