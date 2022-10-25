import React, {useState} from 'react';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

interface cardClassType {
  rank: string,
  suit: string,
}

function App() {
  const ClassCard: React.FC<cardClassType> = props => {
    const cardClass = 'card rank-' + props.rank + ' ' + props.suit;
    let suit = '';

    if (props.suit === 'diams') {
      suit = '♦';
    } else if (props.suit === 'hearts') {
      suit = '♥';
    } else if (props.suit === 'clubs') {
      suit = '♣';
    } else if (props.suit === 'spades') {
      suit = '♠';
    }

    return (
      <div className="playingCards faceImages">
        <span className={cardClass}>
          <span className="rank">{props.rank.toUpperCase()}</span>
          <span className="suit">{suit}</span>
        </span>
      </div>
    );
  };

  const [cards, setCards] = useState<Card[]>([]);

  const getCardsDeck = () =>{
    const newCardDeck = new CardDeck();
    const newCardArr = newCardDeck.getCards(5);

    setCards([
      {suit: newCardArr[0].suit, rank: newCardArr[0].rank},
      {suit: newCardArr[1].suit, rank: newCardArr[1].rank},
      {suit: newCardArr[2].suit, rank: newCardArr[2].rank},
      {suit: newCardArr[3].suit, rank: newCardArr[3].rank},
      {suit: newCardArr[4].suit, rank: newCardArr[4].rank},
    ]);

    const newHand = new PokerHand();
    newHand.arr.push(newCardArr[0], newCardArr[1], newCardArr[2], newCardArr[3], newCardArr[4]);
    newHand.getOutcome();
  };

  const btn = <button className="custom-btn btn" onClick={getCardsDeck}><span>Click</span></button>;

  if (cards.length === 0) {
    return (
      <div className="App">
        {btn}
      </div>
    );
  }

  return (
    <div className="App">
      {btn}
      <div className="block-cards">
        <ClassCard rank={cards[0].rank} suit={cards[0].suit}/>
        <ClassCard rank={cards[1].rank} suit={cards[1].suit}/>
        <ClassCard rank={cards[2].rank} suit={cards[2].suit}/>
        <ClassCard rank={cards[3].rank} suit={cards[3].suit}/>
        <ClassCard rank={cards[4].rank} suit={cards[4].suit}/>
      </div>
    </div>
  );
}

export default App;
