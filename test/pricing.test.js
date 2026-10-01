const test = require('node:test');
const assert = require('node:assert/strict');
const { applyDiscount, priceWithTax } = require('../src/pricing');

test('a promo code takes its share off', () => {
  assert.equal(applyDiscount(200, 'SAVE10'), 180);
});

test('an unknown code changes nothing', () => {
  assert.equal(applyDiscount(200, 'NOPE'), 200);
});

test('tax is added on top', () => {
  assert.equal(priceWithTax(100), 118);
});
