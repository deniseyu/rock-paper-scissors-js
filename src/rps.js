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

Game.prototype.winningString = function(optionOne, optionTwo) {
  if (optionOne === optionTwo)
    return 'draw';
  if ((optionOne === 'bulbasaur' && optionTwo === 'charmander') || 
    (optionOne === 'charmander' && optionTwo === 'squirtle') || 
    (optionOne === 'squirtle' && optionTwo === 'bulbasaur'))
    return optionTwo + ' wins!';
  else
    return optionOne + ' wins!';
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
  return this.players;
};

Game.prototype.assess_winner = function(playerOne, playerTwo) {
  if (this.winningChoice(playerOne.option, playerTwo.option) instanceof Draw)
    return 'Its a draw';
  if (this.winningChoice(playerOne.option, playerTwo.option) === playerOne.option)
    return 'Player One wins!';
  else    
    return 'Player Two wins!';
};

function Player(my_name){
  this.type = 'player';
  if (my_name === undefined) {
    this.name = "Player" }
  else {
    this.name = my_name;
    };
};

Player.prototype.chooses = function(pokemon) {
  this.option = pokemon;
};

Player.prototype.randomly_chooses = function() {
  var choices = ['squirtle', 'bulbasaur', 'charmander'];
  this.option = choices[Math.round(Math.random() * (choices.length - 1))];
};


