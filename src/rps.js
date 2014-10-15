function Charmander(){
 this.type = 'fire';
};

function Squirtle(){
  this.type = 'water';
};

function Bulbasaur(){
  this.type = 'grass';
};

function Game(){
  this.players = [];
};

Game.prototype.winner = function(optionOne, optionTwo) {
  if ((optionOne.type === 'fire' && optionTwo.type === 'grass') || 
    (optionTwo.type === 'fire' && optionOne.type === 'grass'))
    return 'charmander';
  if ((optionOne.type === 'water' && optionTwo.type === 'fire') || 
    (optionTwo.type === 'water' && optionOne.type === 'fire'))
    return 'squirtle';
  if((optionOne.type === 'grass' && optionTwo.type === 'water')||
    (optionTwo.type === 'grass' && optionOne.type === 'water'))
    return 'bulbasaur';
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

function Player(){};
