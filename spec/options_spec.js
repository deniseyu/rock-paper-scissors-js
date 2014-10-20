describe('Options', function(){

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

});