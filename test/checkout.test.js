const test = require('node:test');
const assert = require('node:assert/strict');

process.env.PAYMENT_KEY = 'test-key';
const { checkout } = require('../src/checkout');

test('checkout charges the discounted total', () => {
  const cart = { customer: { id: 'c1' }, items: [{ sku: 'mug', name: 'Mug', price: 250, qty: 2 }] };
  assert.deepEqual(checkout(cart, 'SAVE10'), { ok: true, customer: 'c1', amount: 450 });
});
