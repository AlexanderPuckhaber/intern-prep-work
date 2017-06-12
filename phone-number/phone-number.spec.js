var PhoneNumber = require('./phone-number');

/**
 * Write good descriptions for each of these unit tests.
 * Maintain good form by filling in the sentence:
 * ______ should _______.
 * 
 * Look at the other unit tests for the other projects for
 * good examples of proper form.
 */

describe("", function () {


  it("phone number with area code in parentheses and numbers separated by dashes should be cleaned up, leaving a string of just the digits.", function () {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });


  it("phone number with area code and digits separated by '.' should be cleaned up, leaving a string of only digits", function () {
    var phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });


  it("Above test should work with _any_ set of digits, as long as they are in a standard format: \n (first 3 digits separated for area code, then 7 more that may be separated after the third digit) \n*Additionally, the first number of the area code and fourth digit overall must be between 2-9", function () {
    var phone = new PhoneNumber('555.456.7890');
    expect(phone.number()).toEqual('5554567890');
  });


  it("phone number with 11 digits should be shortened to 10 by removing the first digit, which should be 1, the country code", function () {
    var phone = new PhoneNumber('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  it("phone number that is invalid (at least 2 spaces next to eachother) should be replaced with 10 zeroes", function () {
    var phone = new PhoneNumber('2  1234567890');
    expect(phone.number()).toEqual('0000000000');
  });


  it("phone number with 12 or more digits is invalid and should be replaced with 10 zeroes", function () {
    var phone = new PhoneNumber('991234567890');
    expect(phone.number()).toEqual('0000000000');
  });


  it("phone number with fewer than 10 digits is invalid and should be replaced with zeroes", function () {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual('0000000000');
  });


  it("PhoneNumber object should identify first 3 digits of a 10 digit phone number as the area code", function () {
    var phone = new PhoneNumber('1234567890');
    expect(phone.areaCode()).toEqual('123');
  });


  it("Above function should work with all valid phone numbers", function () {
    var phone = new PhoneNumber('5554567890');
    expect(phone.areaCode()).toEqual('555');
  });


  it("PhoneNumber object should retain original phone number input string and store it \n Function toString() should return a string with 3 digit area code surrounded by parenthesis, followed by a space, the next 3 digits, a '-', and the last 4 digits", function () {
    var phone = new PhoneNumber('1234567890');
    expect(phone.toString()).toEqual('(123) 456-7890');
  });

  it("above function should work for all valid phone numbers", function () {
    var phone = new PhoneNumber('5554567890');
    expect(phone.toString()).toEqual('(555) 456-7890');
  });
});