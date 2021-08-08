
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Table from './Table'
import Credits from './Credits';
import Deck from './Deck';
import Card from './Card';
import Hand from './Hand';
import Outcome from './Outcome';
import Paytable from './Paytable';
import Odds from './Odds';

import { saveDeck } from '../actions/deck';
import { saveHand } from '../actions/hand';

import '../styles/Peeker.scss';

function Peeker() {

    const dispatch = useDispatch();
    let toInject = false;

    const injectHand = () => {
        let hand = [];
        hand.push(new Card(3, 'd', 't', 'Diamonds', 'Ten', 10));
        hand.push(new Card(4, 'h', '6', 'Hearts', 'Six', 6));
        hand.push(new Card(1, 's', 't', 'Spades', 'Ten', 10));
        hand.push(new Card(2, 'h', '5', 'Hearts', 'Five', 5));
        hand.push(new Card(5, 's', '3', 'Spades', 'Three', 3));
        let newHand = new Hand(hand);
        newHand.inject(hand);
        return newHand;
    }

    useEffect(() => {
        let deck = new Deck();
        let hand = new Hand()
        deck.create();
        deck.shuffle();
        toInject ? hand = injectHand() : hand.cards = deck.deal(5);
        dispatch(saveDeck(deck));
        dispatch(saveHand(hand));
    },[dispatch, toInject]);

    return (
    <div className="wrapper">
        <Odds />
        <Table />
        <Paytable />
        <Credits />
        <Outcome />
        <div className="hints"></div>
    </div>
    );
}

export default Peeker;