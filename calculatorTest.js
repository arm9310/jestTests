const calculator = require('./calculator');

test('sum adds two numbers', () => {
  expect(calculator.sum(2, 3)).toBe(5);
});

PASS  ./calculator.test.js
✓ sum adds two numbers (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total