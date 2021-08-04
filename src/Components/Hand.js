class Hand {
    constructor(cards = []) {
        this.cards = cards;
        this.sortedCards = null;
        this.lookup = null;
        this.value = 0;
    }

    evaluate() {

        let outcome;

        const countPairs = () => {
            let count = this.cards.length;
            let hm = {};
            for (let i = 0; i < count; i++) {
                if (this.cards[i].value in hm) {
                    hm[this.cards[i].value]++;
                } else {
                    hm[this.cards[i].value] = 1;
                }
            }
           this.lookup = hm;
        }

        const getFourThreeTwo = () => {
            let isFour = false;
            let isTwo = false;
            let isThree = false;
            let vals = [];
            let three = null;
            let two = null;
            console.log(this.lookup);

            for (let item in this.lookup) {
                if (this.lookup[item] === 4) {
                    isFour = true;
                    vals.push(item);

                }

                if (this.lookup[item] === 3) {
                    isThree = true;
                    vals.push(item);
                    three = item
                }

                if (this.lookup[item] === 2)  {
                    isTwo = true;
                    vals.push(item);
                    two = item;
                }
            }
            return {isFour, isThree, isTwo, vals, three, two};
        }

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
            if (this.sortedCards[0].numberVal !== 1){
                return (this.sortedCards[4].numberVal - this.sortedCards[0].numberVal === 4) ? true : false;
            }
            return this.sortedCards[4].numberVal - this.sortedCards[1].numberVal === 3;
        }

        const getHandValue = () => {
        // royal 900
        if (isStraight() && isFlush() && this.sortedCards[0].numberVal === 1) {
            this.value = 900;
            return "Royal Flush";
        }

        // straight flush 800
        if (isStraight() && isFlush()){
            this.value = 800 + this.sortedCards[4].numberVal;
            return `${this.sortedCards[4].value.toUpperCase()} High Straight Flush`;
        }

        // four of a kind 700
        if (getFourThreeTwo()['isFour']){
            this.value = 700 + Number(getFourThreeTwo()['vals'][0]);
            return `Four of a Kind ${getFourThreeTwo()['vals'][0]}s`
        }

        // full house 600
        if (getFourThreeTwo()['isThree'] && getFourThreeTwo()['isTwo']){
            let val1 = getFourThreeTwo()['three'];
            let val2 = getFourThreeTwo()['two'];
            this.value = 600 + (Number(val1) * 2) + Number(val2);
            return `${val1}s Full of ${val2}s`;
        }


        // flush 500
        if (isFlush()) {
            return `FLUSH`
        }

        // straight 400
        let vals = getFourThreeTwo();
        if (isStraight() && !vals['isFour'] && !vals['isThree'] && !vals['isTwo']) {
            this.value = 400 + this.sortedCards[4].numberVal;
            return `${this.sortedCards[4].value.toUpperCase()} High Straight`;
        }

        // trips 300
        if (getFourThreeTwo()['isThree']){
            let val = getFourThreeTwo()['vals'][0];
            this.value = 300 + Number(val);
            return `Three of a Kind ${val.toUpperCase()}s`;
        }

        // two pair 200
        if (getFourThreeTwo()['isTwo'] && getFourThreeTwo()['vals'].length === 2) {
            let sorted = getFourThreeTwo()['vals'].sort();
            this.value = 200 + Number(getFourThreeTwo()['vals'][0] + getFourThreeTwo()['vals'][1]);
            return `Two Pair ${sorted[0].toUpperCase()}s over ${sorted[1].toUpperCase()}s`;
        }

        // pair 100
        if (getFourThreeTwo()['isTwo']) {
            let val = getFourThreeTwo()['vals'][0];
            this.value = 100 + Number(val);
            return `Pair of ${val.toUpperCase()}s`;
        }

        // High Card 0
        if (this.sortedCards[0].numberVal === 1) {
            this.value = 14;
            return 'High Card Ace';
        }
        this.value = this.sortedCards[4].numberVal;
        return `High Card ${this.sortedCards[4].fullValue}`;
        }





        getSorted();
        countPairs();
        outcome = getHandValue() || "Nothing";
        return outcome;
    }

    inject(hand){
        this.cards = hand;
    }
}

export default Hand;