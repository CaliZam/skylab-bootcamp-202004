describe('find-index', function () {
    it('it should itarate on each element and return the position of the first one that validates the callback condition, exemple with numbers', function () {
        var array = new Arroz(5, 12, 8, 130, 44);
        var found = array.findIndex(function(ell){ return ell > 10;});

        expect(found).toBe(1);
    });

    it('it should itarate on each element and return the position of the first  one that validates the callback condition, exemple with strings', function () {
        var array = new Arroz('hola', 'buenas', 'como', 'buenascomoestas');
        var found = array.findIndex(function(ell){ return ell.length > 7;});

        expect(found).toBe(3);
    });

    it('it should itarate on each element and return the position of the first  one that validates the callback condition, exemple with strings', function () {
        var array = new Arroz('hola', 'buenas', 'como', 'buenascomoestas');
        var found = array.findIndex(function(ell){ return ell.length === 'pepe'});

        expect(found).toBe(undefined);
    });
});