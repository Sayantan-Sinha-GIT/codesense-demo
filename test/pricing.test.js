const test = require('node:test');
const assert = require('node:assert/strict');
const { applyDiscount, priceWithTax } = require('../src/pricing');

test('a promo code takes its share off', () => {
  assert.equal(applyDiscount(200, 'SAVE10', { tier: null }), 180);
});

test('gold customers keep their bigger tier discount', () => {
  assert.equal(applyDiscount(200, 'SAVE10', { tier: 'gold' }), 170);
});

test('tax is added on top', () => {
  assert.equal(priceWithTax(100), 118);
});
