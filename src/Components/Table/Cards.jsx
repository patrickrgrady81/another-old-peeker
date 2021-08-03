import '../../styles/Cards.scss';

import { useSelector } from 'react-redux';

function Cards() {

    const hand = useSelector(state => state.hand);

    if (hand.cards) {
        let cardList = hand.cards.map(card => {
            return <img key={card.id} src={`/assets/cards/${card.value}${card.suit}.png`} alt="card" className="playing-cards"></img>
        })
        
        return (
            <div className="cards">
                <>{cardList}</>
                
            </div>
        )} else {
            return <h1>Loading...</h1>
    }
}

export default Cards;

// 


        // <div className="cards">
        //     <img src="/assets/cards/ad.png" alt="card1" className="playing-cards" />
        //     <img src="/assets/cards/ad.png" alt="card1" className="playing-cards" />
        //     <img src="/assets/cards/ad.png" alt="card1" className="playing-cards" />
        //     <img src="/assets/cards/ad.png" alt="card1" className="playing-cards" />
        //     <img src="/assets/cards/ad.png" alt="card1" className="playing-cards" />
        // </div>


                    // { hand.forEach((card) => {
            //     return <img src={`/assets/cards/${card.value}${card.suit}.png`} alt="" />
            // })}
