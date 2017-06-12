var Bob = require('./bob.js');

describe('Bob', function () {
  var bob = new Bob();

  it('should respond "Whatever" when something is stated at him', function(){
    var result = bob.hey('take out the trash');
    expect(result).toEqual('Whatever.');
  });

  it('should response "Whoa, chill out!" when shouted at', function(){
    var result = bob.hey('YELLING!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('should agree with "Sure." when asked a question', function(){
    var result = bob.hey('?????a?????');
    expect(result).toEqual('Sure.');
  });

  it('should respond with "Whatever." when merely spoken to assertively', function(){
    var result = bob.hey('I know what is best for you');
    expect(result).toEqual('Whatever.');
  });

  it('should respond "Whoa, chill out!" when shouted a question', function(){
    var result = bob.hey('CAN YOU TAKE OUT THE TRASH!?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('should respond "Whoa, chill out!" when shouted at with numbers', function(){
    var result = bob.hey('7381489102734!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('should respond "Whatever." when only spoken to with numbers', function(){
    var result = bob.hey('102387410234');
    expect(result).toEqual('Whatever.');
  });

  it('should agree when asked a question with numbers', function(){
    var result = bob.hey('1234709128374?');
    expect(result).toEqual('Sure.');
  });

  it('should respond "Whoa, chill out!" when shouted at with symbols', function(){
    var result = bob.hey('%&*($$%^&(!');
    expect(result).toEqual('Whoa, chill out!');
  });

  /* NOTE: \xc4 = Ä
           \xe4 = ä
           \xdc = Ü 
           \xfc = ü
     "\xfcML\xe4\xdcTS" === "üMLäÜTS"
  */
  it('should respond "Whoa, chill out!" when should at with umlauts (unicode)', function(){
    var result = bob.hey('\xfcML\xe4\xdcTS!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('should respond "Whatever" when calmly spoken to with umlauts', function(){
    var result = bob.hey('\xfcML\xe4\xdcTS');
    expect(result).toEqual('Whatever.');
  });

  it('should respond "Whoa, chill out!" when spoken to in only caps but no exclamation mark', function(){
    var result = bob.hey('CAN YOU TAKE OUT THE TRASH?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('should respond with "Whatever" when given an assertion containing but not ending in a question', function(){
    var result = bob.hey('Hello? Hey you, do your homework.');
    expect(result).toEqual('Whatever.');
  });

  it('should agree when several statements are spoken to him and the last one is a question', function(){
    var result = bob.hey('Hello! What is your name?');
    expect(result).toEqual('Sure.');
  });

  it('should be indignant when not spoken to', function(){
    var result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('should be indignant when spoken to with prolonged silence (multiple spaces)', function(){
    var result = bob.hey('         ');
    expect(result).toEqual('Fine. Be that way!');
  });

  /**
   * Are there more tests you can think of that would push the limits of
   * what Bob is capable of? How about different types of whitespace like
   * new line, carriage returns, backspaces? What are the responses Bob should
   * give in those situations and what kind of tests would be capable of
   * showing that Bob is able to handle those kinds of input?
   * 
   * What about different combinations of exclamations and questions?
   * One test already shows how this might be problematic, can you write more
   * that demonstrate the logic behind the parsing?
   * 
   * Can you think of any tests that would break Bob (i.e., where the test would fail?)
   *
   * Do you think the test below (about acronyms) is a worthwhile test? Why or why not?
   */

  it('using acronyms in regular speech', function () {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });
});
