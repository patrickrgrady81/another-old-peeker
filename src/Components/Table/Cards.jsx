import '../../styles/Cards.scss';

import { useSelector, useDispatch } from 'react-redux';

import { changeHolds } from '../../actions/holds';

function Cards() {

    const hand = useSelector(state => state.hand);

    let dispatch = useDispatch();

    const handleClick = (e) => {
        let id = Number(e.target.id);
        let holds = document.querySelectorAll('.hold-button');

        if (holds[id].classList.contains('light-red')) {
            holds[id].classList.remove('light-red');
            holds[id].classList.add('dark-red');
        } else {
            holds[id].classList.remove('dark-red');
            holds[id].classList.add('light-red');
            dispatch(changeHolds(id));
        }

        dispatch(changeHolds(id));
    }

    let count = 0;

    if (hand.cards) {
        let cardList = hand.cards.map(card => {
            return <img key={card.id} id={count++} src={`/assets/cards/${card.value}${card.suit}.png`} alt="card" className="playing-cards" onClick={handleClick}></img>
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
