import React from 'react';

import Controls from './Controls';
import Cards from './Cards';
import HoldButtons from './HoldButtons';

import '../../styles/Table.scss'

function Table() {

    return (
        <div className="table">
            <Cards />
            <HoldButtons /> 
            <Controls />
        </div>
    )
}

export default Table
