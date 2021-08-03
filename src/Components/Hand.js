class Hand {
    constructor(cards = []) {
        this.cards = cards;
    }

    evaluate() {
        let count = this.cards.length;

        let pairCount = 0;
        let pairs = [];


        const countPairs = () => {
            for (let i = 0; i < count-1; i++){
                for (let j = 1; j < count; j++){
                    if (this.cards[i].value === this.cards[j].value && i !== j) {
                        pairCount++;
                        pairs.push(this.cards[i].value);
                    }
                }
            }
        }
        // eslint-disable-next-line
        const isFlush = () => {
            return this.cards[0].suit === this.cards[1].suit && this.cards[1].suit === this.cards[2].suit && this.cards[2].suit === this.cards[3].suit && this.cards[3].suit === this.cards[4].suit;
        }

        countPairs();
        return pairCount;
    }

    inject(hand){
        this.cards = hand;
    }
}

export default Hand;