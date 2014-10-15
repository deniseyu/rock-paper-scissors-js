describe('Game', function(){

  describe('option type', function(){

    it('charmander should be type fire', function(){
      charmander = new Charmander;
      expect(charmander.type).toEqual("fire");
    });

    it('squirtle should be type water',function(){
      squirtle = new Squirtle;
      expect(squirtle.type).toEqual('water');
    });

    it('bulbasaur should be type grass', function(){
      bulbasaur = new Bulbasaur;
      expect(bulbasaur.type).toEqual('grass');
    });

  });

  describe('winning option',function(){

    beforeEach(function(){
      charmander = new Charmander;
      bulbasaur = new Bulbasaur;
      squirtle = new Squirtle;
      game = new Game;

    });

    it('charmander beats bulbasaur',function(){
      expect(game.winner(charmander, bulbasaur)).toEqual('charmander');
    });

    it('squirtle beats charmander',function(){
      expect(game.winner(squirtle, charmander)).toEqual('squirtle');
    });

    it('bulbasaur beats squirtle',function(){
      expect(game.winner(bulbasaur, squirtle)).toEqual('bulbasaur');
    });



    it('bulbasaur is beaten by charmander', function(){
      expect(game.winner(bulbasaur, charmander)).toEqual('charmander');
    });

    it('charmander is beaten by squirtle', function(){
      expect(game.winner(charmander, squirtle)).toEqual('squirtle');
    });

    it('squirtle is beaten by bulbasaur', function(){
      expect(game.winner(squirtle, bulbasaur)).toEqual('bulbasaur');
    });

 });
 







});