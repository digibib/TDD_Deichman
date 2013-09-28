/*
 * String calc test
 */
var assert  = require('assert');
var expect = require('expect.js');
var StringCalc = require('../string_calc.js');

describe('adding ',function(){
  var calc = new StringCalc();
  
  it('adds a number', function(){
    var res = calc.add("1");
    expect(res).to.equal(1);
  });
  
  it('adds two numbers', function() {
    var res = calc.add("1,2");
    expect(res).to.equal(3);
  });

  it('adds several numbers', function() {
    var res = calc.add("1,2,3,4");
    expect(res).to.equal(10);
  });
  
  describe('illegal numbers ',function(){
  
    it('ignores negative numbers', function() {
      var res = calc.add("1,-1");
      expect(res).to.equal(1);
    });

    it('ignores numbers over 1000', function() {
      var res = calc.add("1,1001");
      expect(res).to.equal(1);
    });
      
  });
  describe('delimiters ',function(){
    it('allows newline as delimiter',function(){
      var res = calc.add("1\n2");
      expect(res).to.equal(3);
    });
  });
});
