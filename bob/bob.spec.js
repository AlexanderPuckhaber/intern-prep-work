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

  it('should agree with "Sure" when asked a question');

  it('should respond with "Whatever" when merely spoken to assertively');

  it('should respond "Whoa, chill out!" when shouted a question');

  it('should respond "Whoa, chill out!" when shouted at with numbers');

  it('should respond "Whatever" when only spoken to with numbers');

  it('should agree when asked a question with numbers');

  it('should respond "Whoa, chill out!" when shouted at with symbols');

  /* NOTE: \xc4 = Ä
           \xe4 = ä
           \xdc = Ü 
           \xfc = ü
     "\xfcML\xe4\xdcTS" === "üMLäÜTS"
  */
  it('should respond "Whoa, chill out!" when should at with umlauts (unicode)');

  it('should respond "Whatever" when calmly spoken to with umlauts');

  it('should respond "Whoa, chill out!" when spoken to in only caps but no exclamation mark');

  it('should respond with "Whatever" when given an assertion containing but not ending in a question');

  it('should agree when several statements are spoken to him and the last one is a question');

  it('should be indignant when not spoken to');

  it('should be indignant when spoken to with prolonged silence (multiple spaces)');

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
