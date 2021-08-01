import '../styles/Peeker.scss';

// import Deck from './Deck'

import Table from './Table'

// TODO: credits and hook up with bet 

function Peeker() {

  // const showDeck = () => {
  //   let deck = new Deck();
  //   deck.create();
  //   deck.shuffle();
  //   deck.cards.forEach(card => {
  //     card.log();
  //   });
  // }

  // showDeck();

  return (
    <div className="wrapper">
      <div className="odds"></div>
      <Table />
      <div className="pay"></div>
      <div className="credits"></div>
      <div className="outcome"></div>
      <div className="hints"></div>
    </div>
  );
}

export default Peeker;