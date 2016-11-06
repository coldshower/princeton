describe('9-1: Symbol Table', function () {
  var sT;

  beforeEach(function () {
    sT = new SymbolTable();
  });

  it('is a constructor', function () {
    expect(typeof SymbolTable).toEqual('function');
  });

  it('has instances with methods', function () {
    expect(typeof sT.get).toEqual('function');
    expect(typeof sT.put).toEqual('function');
    expect(typeof sT.delete).toEqual('function');
    expect(typeof sT.contains).toEqual('function');
    expect(typeof sT.size).toEqual('function');
  }); 

  it('can add key value pairs with put', function () {
    sT.put('a', 'apple');
    expect(sT.get('a')).toEqual('apple');
    sT.put('b', 'boy');
    expect(sT.get('b')).toEqual('boy');
  });

  it('can overwrite existing values', function () {
    sT.put('a', 'apple');
    sT.put('a', 'arachnid');
    expect(sT.get('a')).toEqual('arachnid');
  });

  it('can remove existing values', function () {
    sT.put('a', 'apple');
    expect(sT.get('a')).toEqual('apple');
    sT.delete('a');
    expect(sT.get('a')).toEqual(null);
  });

  it('can check if there is a value linked to a key', function () {
    sT.put('a', 'apple');
    expect(sT.contains('a')).toEqual(true);
    expect(sT.contains('c')).toEqual(false);
  });

  it('can evaluate the size of the table', function () {
    expect(sT.size()).toEqual(0);
    sT.put('a', 'apple');
    expect(sT.size()).toEqual(1);
    sT.put('b', 'boy');
    expect(sT.size()).toEqual(2);
    sT.delete('b');
    expect(sT.size()).toEqual(1);
  });

});