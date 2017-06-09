var HelloWorld = require('./hello-world');

describe('Hello World', function() {
  var helloWorld = new HelloWorld();

  //it('should say hello with no name');

  it('says hello world with no name', function() {
      expect(helloWorld.hello('')).toEqual('Hello, World!');
    });

  it('should say hello to bob', function() {
      expect(helloWorld.hello('bob')).toEqual('Hello, World!')
  });

  it('should say hello to sally', function() {
      expect(helloWorld.hello('sally')).toEqual('Hello, World!')
  });
});
