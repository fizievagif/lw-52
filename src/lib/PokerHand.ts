import Card from "./Card";

class PokerHand {
  constructor(public arr: Card[] = []) {
  }

  getOutcome() {
    let pair = 0;

    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < i; j++){
        if (this.arr[i].rank === this.arr[j].rank){
          pair++;
        }
      }
    }

    if (pair === 1){
      alert('Одна пара!');
    } else if (pair === 2){
      alert('Две пары!');
    }

    let three = false;

    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < i; j++) {
        for (let k = 0; k < j; k++) {
          if (this.arr[i].rank === this.arr[j].rank && this.arr[j].rank === this.arr[k].rank){
            three = true;
          }
        }
      }
    }

    if (three) {
      alert('Тройка!');
    }

    let flush = [];

    for (let i = 0; i < this.arr.length; i++) {
      if (flush.length === 0 || flush[0] === this.arr[i].suit) {
        flush.push(this.arr[i].suit);
      }
    }

    if (flush.length === 5) {
      alert('Флеш!')
    }
  }
}

export default PokerHand;