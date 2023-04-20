const calculator = require('../functions/calculator');

test('add function should return the sum of two numbers', () => {
  expect(calculator.addition(2, 3)).toBe(5);
});

test('subtract function should return the difference between two numbers', () => {
  expect(calculator.substraction(5, 3)).toBe(2);
});

test('multiply function should return the product of two numbers', () => {
  expect(calculator.multiplication(2, 3)).toBe(6);
});

test('divide function should return the quotient of two numbers', () => {
  expect(calculator.divison(6, 3)).toBe(2);
});
