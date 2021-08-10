import React from 'react';
import { sprintf } from 'sprintf-js'

import '../styles/Odds.scss';

function Odds() {

    const hands = ["Royal Flush", "Straight Flush", "Four of a Kind", "Full House",
        "Flush", "Straight", "Three of a Kind", "Two Pair", "Jacks or Better"];

    const totalHands =  1661102543100.0

    const odds = [
        sprintf( "%1.6f", (41126022.0 / totalHands) * 100),
        sprintf( "%1.6f", (181573608.0 / totalHands) * 100),
        sprintf( "%1.6f", (3924430647.0 / totalHands) * 100),
        sprintf( "%1.6f", (19122956883.0 / totalHands) * 100),
        sprintf( "%1.6f", (18296232180.0 / totalHands) * 100),
        sprintf( "%1.6f", (18653130482.0 / totalHands) * 100),
        sprintf( "%1.6f", (123666922527.0 / totalHands) * 100),
        sprintf( "%1.6f", (214745513679.0 / totalHands) * 100),
        sprintf( "%1.6f", (356447740914.0 / totalHands) * 100)
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
