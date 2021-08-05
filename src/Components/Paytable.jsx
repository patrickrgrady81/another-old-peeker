import React from 'react';
import { useSelector } from 'react-redux';

import payTable from './pay';

import '../styles/Paytable.scss';

function Paytable() {

    const bet = useSelector(state => state.bet);

    return (
        <div className="pay">
        <h3 className="paytable">Pay Table</h3>
        <table>
            <thead>
                <tr className="head">
                    {payTable.map((cols, i) => (
                        <th key={i} className= {(i === bet ? "active" : "col")}>{cols[0]}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[1]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[2]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[3]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[4]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[5]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[6]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[7]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[8]}</th>
                    ))}
                </tr>
                <tr>
                    {payTable.map((cols, i) => (
                        <th key={i} className={(i === bet ? "active" : "col")}>{cols[9]}</th>
                    ))}
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Paytable
