
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Table from './Table'
import Credits from './Credits';
import Deck from './Deck';
import Card from './Card';
import Hand from './Hand';
import Outcome from './Outcome';

import { saveDeck } from '../actions/deck';
import { saveHand } from '../actions/hand';

import '../styles/Peeker.scss';

function Peeker() {

    const dispatch = useDispatch();
    let toInject = true;

    const injectHand = () => {
        let hand = [];
        hand.push(new Card(3, 'd', 't', 'Diamonds', 'Ten', 10));
        hand.push(new Card(4, 'h', 't', 'Hearts', 'Ten', 10));
        hand.push(new Card(1, 's', 'k', 'Spades', 'King', 13));
        hand.push(new Card(2, 'h', 'k', 'Hearts', 'King', 13));
        hand.push(new Card(5, 's', '2', 'Spades', 'Two', 2));
        let newHand = new Hand(hand);
        newHand.inject(hand);
        return newHand;
    }

    useEffect(() => {
        let hand;
        let deck = new Deck();
        hand = new Hand()
        deck.create();
        deck.shuffle();
        toInject ? hand = injectHand() : hand.cards = deck.deal(5);
        dispatch(saveDeck(deck));
        dispatch(saveHand(hand));
    },[dispatch, toInject]);

    return (
    <div className="wrapper">
        <div className="odds"></div>
        <Table />
        <div className="pay"></div>
        <Credits />
        <Outcome />
        <div className="hints"></div>
    </div>
    );
}

export default Peeker;