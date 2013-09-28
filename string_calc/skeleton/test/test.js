/*
 * String calc test
 */
var assert  = require('assert');
var expect = require('expect.js');
var StringCalc = require('../string_calc.js');

describe('adding ',function(){
  var calc = new StringCalc();
  
  // expect example
  it('adds a number and expect result', function(){
    var res = calc.add("1");
    expect(res).to.equal(2);
  });

  // assert example
  it('adds a number and assert result', function(){
    var res = calc.add("1");
    assert.equal(res, 2);
  });

  it('adds two numbers');

});