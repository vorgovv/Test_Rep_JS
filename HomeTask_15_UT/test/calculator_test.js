const { expect } = require('chai');
const Calculator = require('../src/calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add numbers correctly', () => {
    expect(calculator.add(2, 3, 4)).to.equal(9);
  });

  it('should multiply numbers correctly', () => {
    expect(calculator.multiply(2, 3, 4)).to.equal(24);
  });

  it('should subtract numbers correctly', () => {
    expect(calculator.subtraction(5, 3)).to.equal(2);
  });

  it('should divide numbers correctly', () => {
    expect(calculator.divide(10, 2)).to.equal(5);
  });

  it('should exponentiate numbers correctly', () => {
    expect(calculator.exponentiation(3)).to.equal(9);
  });
});