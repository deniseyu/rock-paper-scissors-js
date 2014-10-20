describe('Game', function(){
  var playerOne,
      playerTwo,
      game,
      draw,
      charmander,
      bulbasaur,
      squirtle;
  
  describe('winning and losing options',function(){


    beforeEach(function(){
      charmander = new Charmander;
      bulbasaur = new Bulbasaur;
      squirtle = new Squirtle;
      game = new Game;
    });

    it('charmander beats bulbasaur',function(){
      expect(game.winningChoice(charmander, bulbasaur)).toEqual(charmander);
    });

    it('squirtle beats charmander',function(){
      expect(game.winningChoice(squirtle, charmander)).toEqual(squirtle);
    });

    it('bulbasaur beats squirtle',function(){
      expect(game.winningChoice(bulbasaur, squirtle)).toEqual(bulbasaur);
    });

    it('bulbasaur is beaten by charmander', function(){
      expect(game.winningChoice(bulbasaur, charmander)).toEqual(charmander);
    });

    it('charmander is beaten by squirtle', function(){
      expect(game.winningChoice(charmander, squirtle)).toEqual(squirtle);
    });

    it('squirtle is beaten by bulbasaur', function(){
      expect(game.winningChoice(squirtle, bulbasaur)).toEqual(bulbasaur);
    });

  });
 
  describe('when playing the game', function(){

    beforeEach(function(){
      playerOne = new Player;
      playerTwo = new Player;
      game = new Game;
      draw = new Draw;
      game.addPlayer(playerOne);
      game.addPlayer(playerTwo);
    });

    it('should have two players', function(){
      expect(game.players).toEqual([playerOne, playerTwo]);
    });

    it('should declare a draw', function(){
      playerOne.chooses(charmander);
      playerTwo.chooses(charmander);
      expect(game.winningChoice(charmander, charmander)).toEqual(draw);
    });

    it('should declare the winning choice', function(){
      playerOne.chooses(charmander);
      playerTwo.chooses(squirtle);
      expect(game.winningChoice(playerOne.option, playerTwo.option)).toEqual(squirtle)
    });

    it('should declare when Player One and Player Two draw', function(){
      playerOne.chooses(squirtle);
      playerTwo.chooses(squirtle);
      expect(game.assess_winner(playerOne, playerTwo)).toEqual('Its a draw');
    });

    it('should declare when Player One wins', function(){
      playerOne.chooses(charmander);
      playerTwo.chooses(bulbasaur);
      expect(game.assess_winner(playerOne, playerTwo)).toEqual('Player One wins!')
    });

    it('should declare when Player Two wins', function(){
      playerOne.chooses(charmander);
      playerTwo.chooses(squirtle);
      expect(game.assess_winner(playerOne, playerTwo)).toEqual('Player Two wins!')
    });

  });

  describe('Player', function(){

    beforeEach(function(){
      charmander = new Charmander;
      bulbasaur = new Bulbasaur;
      squirtle = new Squirtle;
      game = new Game;
      player = new Player;
    });

    it('should have an option', function(){
      player.chooses(bulbasaur);
      expect(player.option).toEqual(bulbasaur);
    });

  });

});