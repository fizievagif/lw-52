import Card from "./Card";

class CardDeck {
  suitArr = ['diams', 'hearts', 'clubs', 'spades'];
  rankArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
  cardArr: Card[] = [];

  constructor() {
    for (let i = 0; i < this.suitArr.length; i++) {
      for (let j = 0; j < this.rankArr.length; j++) {
        const card = new Card(this.suitArr[i], this.rankArr[j]);
        this.cardArr.push(card);
      }
    }
  }

  getCard(): Card {
    const card = this.cardArr.splice(Math.floor(Math.random() * this.cardArr.length), 1);
    return card[0];
  }

  getCards(howMany: number): Card[] {
    let cardsArr = [];
    for (let i = 0; i < howMany; i++) {
      cardsArr.push(this.getCard());
    }
    return cardsArr;
  }
}

export default CardDeck;