import React from 'react';
import { sprintf } from 'sprintf-js'

import '../styles/Odds.scss';

function Odds() {

  // TODO: Calculate odds after draw.

    const hands = ["Royal Flush", "Straight Flush", "Four of a Kind", "Full House",
        "Flush", "Straight", "Three of a Kind", "Two Pair", "JoB"];

    const totalHands =  1_661_102_543_100.0

    const odds = [
        sprintf( "%1.4f", (41_126_022.0 / totalHands) * 100),
        sprintf( "%1.4f", (181_573_608.0 / totalHands) * 100),
        sprintf( "%1.4f", (3_924_430_647.0 / totalHands) * 100),
        sprintf( "%1.4f", (19_122_956_883.0 / totalHands) * 100),
        sprintf( "%1.4f", (18_296_232_180.0 / totalHands) * 100),
        sprintf( "%1.4f", (18_653_130_482.0 / totalHands) * 100),
        sprintf( "%1.4f", (123_666_922_527.0 / totalHands) * 100),
        sprintf( "%1.4f", (214_745_513_679.0 / totalHands) * 100),
        sprintf( "%1.4f", (356_447_740_914.0 / totalHands) * 100)
      ]

    return (
            <div className="odds">
              <h3 className="oddsHead">Odds</h3>
              {hands.map((hand, i) => (
                  <p key={i} className="odd">{`${hand} = ${odds[i]}%`}</p>
              ))}
            </div>
          )
}

export default Odds
