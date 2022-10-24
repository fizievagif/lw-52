import React from 'react';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

interface cardClassType {
  rank: string,
  suit: string,
}

function App() {
  const ClassCard: React.FC<cardClassType> = props => {
    const cardClass = 'card rank-' + props.rank + ' ' + props.suit;
    let suit = '';

    const card = new Card('clubs', 'K');
    const cardDeck = new CardDeck();

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
      <div className="App">
        <div className="playingCards faceImages">
        <span className={cardClass}>
          <span className="rank">{props.rank.toUpperCase()}</span>
          <span className="suit">{suit}</span>
        </span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <ClassCard rank='a' suit='hearts'/>
    </div>
  )
}

export default App;
