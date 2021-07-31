class Card {
    constructor(id, suit, value, fullSuit, fullValue) {
        this.suit = suit;
        this.value = value;
        this.fullSuit = fullSuit;
        this.fullValue = fullValue;
        this.id = id;
    }

    log() {
        console.log(`id: ${this.id}${this.value}${this.suit}  == ${this.fullValue} of ${this.fullSuit}`);
    }
}

export default Card;