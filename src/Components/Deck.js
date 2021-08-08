import Card from './Card';

class Deck {
    constructor() {
        this.cards = [];
    }

    create() {
        const suits = ['s', 'c', 'h', 'd'];
        const fullSuits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
        const values = ['a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k'];
        const fullValues = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        const numberVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let count = 0;

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.cards.push(new Card(count++, suits[i], values[j], fullSuits[i], fullValues[j], numberVal[j]));
            }
        }
    }

    log() {
        this.cards.forEach(card => {
            console.log(card);
        });
    }

    shuffle() {
        let m = this.cards.length;
        let t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }
    
    dealOne() {
        return this.cards.pop();
    }

    deal(amount) {
        let cards = []; 
        for (let i = 0; i < amount; i++) {
            cards.push(this.dealOne());
        }
        return cards;
    }
}

export default Deck;