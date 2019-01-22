let Game = function (cards) {
  this.cards = cards;
  this.points = 0;
  this.rounds = 0;
  this.count=0;
};

Game.prototype.shuffleCards = function (arra1) {
  let ctr = arra1.length;
  let temp;
  let index;
  while (ctr > 0) {
    index = Math.floor (Math.random () * ctr);
    ctr -= 1;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
};

Game.prototype.round = function (a, b) {
  this.rounds += 1;
  if (a > b) {
    this.points += 1;
  };
};

Game.prototype.isFinished = function () {
  if (this.rounds === 4){
    return true;
  }
  return false;
};
