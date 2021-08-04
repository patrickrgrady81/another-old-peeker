class Hand {
    constructor(cards = []) {
        this.cards = cards;
        this.sortedCards = null;
        this.pairCount = null;
    }

    evaluate() {
        let count = this.cards.length;

        // eslint-disable-next-line
        let outcome = "Nothing";

        const countPairs = () => {
            let hm = {};
            for (let i = 0; i < count; i++) {
                if (this.cards[i].value in hm) {
                    hm[this.cards[i].value]++;
                } else {
                    hm[this.cards[i].value] = 1;
                }
            }
           this.pairCount = hm;
        }

        // eslint-disable-next-line
        const isFlush = () => {
            return this.cards[0].suit === this.cards[1].suit && this.cards[1].suit === this.cards[2].suit && this.cards[2].suit === this.cards[3].suit && this.cards[3].suit === this.cards[4].suit;
        }

        const getSorted = () => {
            let sortedHand = this.cards.sort((a, b) => {
                return (a.numberVal > b.numberVal) ? 1 : -1;
            });
            this.sortedCards = sortedHand;
        }

        const isStraight = () => {
            getSorted();
            if (this.sortedCards[0].numberVal !== 1)
                return (this.sortedCards[4].numberVal - this.sortedCards[0].numberVal === 4) ? true : false;
                console.table(this.sortedCards);
            return this.sortedCards[4].numberVal - this.sortedCards[1].numberVal === 3;
        }

        countPairs();
    
        return isStraight().toString();
        // return pairCount;
    }

    inject(hand){
        this.cards = hand;
    }
}

export default Hand;