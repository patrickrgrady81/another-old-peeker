import React from 'react';

import Controls from './Controls';
import Cards from './Cards';

import '../../styles/Table.scss'

function Table() {

    return (
        <div className="table">
            <Cards />
            <div className="hold-buttons"></div>
            <Controls>

            </Controls>
        </div>
    )
}

export default Table
