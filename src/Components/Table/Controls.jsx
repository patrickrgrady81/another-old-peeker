import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { betOne, betMax } from '../../actions/bet';
import { removeCredits } from '../../actions/credits';
import { changeGameState } from '../../actions/gameState';
import { saveDeck } from '../../actions/deck';
import { saveHand } from '../../actions/hand';
import { reset } from '../../actions/holds';

import Hand from '../Hand';
import Deck from '../Deck';

import '../../styles/Controls.scss';

function Controls() {

    const dispatch = useDispatch();
    const bet = useSelector(state => state.bet);
    const gameState = useSelector(state => state.gameState);
    const hand = useSelector(state => state.hand);
    const holds = useSelector(state => state.holds);
    const deck = useSelector(state => state.deck);

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
                        case 'DEAL':

                            let newDeck = new Deck();
                            let newHand = new Hand()
                            newDeck.create();
                            newDeck.shuffle();
                            newHand.cards = newDeck.deal(5);
                            dispatch(saveDeck(newDeck));
                            dispatch(saveHand(newHand));
                            dispatch(reset())
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
        } else {  // if it is draw
            let newHand = [];
            holds.forEach((hold, i) => {
                // console.log(hand);
                hold ? newHand.push(hand.cards[i]) : newHand.push(deck.dealOne());
            });
            dispatch(saveDeck(deck));
            dispatch(saveHand(new Hand(newHand)));
            dispatch(changeGameState());
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
