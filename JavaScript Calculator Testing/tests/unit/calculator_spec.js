var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function() {
    assert.equal(true, true);
  }),

  it('it should have a previous total of 0 at start', function() {
    assert.equal(0, calculator.previousTotal);
  }),

  it('it should have a running total of 0 at start', function() {
    assert.equal(0, calculator.runningTotal);
  }),

  it('it should be able to add a number', function() {
    calculator.add(1);
    assert.equal(1, calculator.runningTotal);
  }),

  it('it should be able to register a number click', function() {
    calculator.numberClick(3);
    assert.equal(3, calculator.runningTotal);
  }),

  it('multiple number clicks register as double digit number', function() {
    calculator.numberClick(8);
    calculator.numberClick(8);
    assert.equal(88, calculator.runningTotal);
  }),

  it('it should be able to add two numbers together', function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  }),

  it('it should be able to subtract two numbers', function() {
    calculator.numberClick(1);
    calculator.operatorClick("-");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(-6, calculator.runningTotal);
  }),

  it('it should be able to divide two numbers', function() {
    calculator.numberClick(7);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(3.5, calculator.runningTotal);
  }),

  it('it should be able to multiply two numbers', function() {
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(16, calculator.runningTotal);
  }),

  it('it should be able to +, -, * or / double digit numbers', function() {
    calculator.numberClick(1);
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(7);
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.equal(85, calculator.runningTotal);
  })

  it('it should be able to clear the running total', function() {
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    calculator.clearClick();
    assert.equal(8, calculator.previousTotal);
    assert.equal(0, calculator.runningTotal);
  })

});
