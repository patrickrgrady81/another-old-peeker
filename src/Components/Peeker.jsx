
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Table from './Table'
import Credits from './Credits';
import Deck from './Deck';
import Hand from './Hand';

import { saveDeck } from '../actions/deck';
import { saveHand } from '../actions/hand';

import '../styles/Peeker.scss';

function Peeker() {

    const dispatch = useDispatch();

    useEffect(() => {
        let deck = new Deck();
        let hand = new Hand();
        deck.create();
        deck.shuffle();
        hand.cards = deck.deal(5);
        dispatch(saveDeck(deck));
        dispatch(saveHand(hand));
    },[dispatch]);

    return (
    <div className="wrapper">
        <div className="odds"></div>
        <Table />
        <div className="pay"></div>
        <Credits />
        <div className="outcome"></div>
        <div className="hints"></div>
    </div>
    );
}

export default Peeker;