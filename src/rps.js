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

function Draw(){
  this.type = 'draw';
};

Game.prototype.winningChoice = function(optionOne, optionTwo) {
  if (optionOne === optionTwo)
    return new Draw;
  if ((optionOne.type === 'grass' && optionTwo.type === 'fire') || 
    (optionOne.type === 'fire' && optionTwo.type === 'water') || 
    (optionOne.type === 'water' && optionTwo.type === 'grass'))
    return optionTwo;
  else
    return optionOne;
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
  return this.players;
};

Game.prototype.assess_winner = function(playerOne, playerTwo) {
  // draw = new Draw;
  if (this.winningChoice(playerOne.option, playerTwo.option) instanceof Draw)
    return 'Its a draw';
  if (this.winningChoice(playerOne.option, playerTwo.option) === playerOne.option)
    return 'Player One wins!';
  else    
    return 'Player Two wins!';
};

function Player(name){
  this.type = 'player';
  if (name === undefined) {
    this.name = "Denise"
  };
};

Player.prototype.chooses = function(pokemon) {
  this.option = pokemon;
};


