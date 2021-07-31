class Card {
    constructor(suit, value, fullSuit, fullValue) {
        this.suit = suit;
        this.value = value;
        this.fullSuit = fullSuit;
        this.fullValue = fullValue;
    }

    log() {
        console.log(`${this.value}${this.suit}  == ${this.fullValue} of ${this.fullSuit}`);
    }
}

export default Card;