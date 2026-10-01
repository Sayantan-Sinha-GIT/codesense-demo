const { round } = require('./money');
const { priceWithTax } = require('./pricing');

function cartTotal(items) {
  return round(items.reduce((sum, item) => sum + item.price * item.qty, 0));
}

function cartTotalWithTax(items, rate) {
  return priceWithTax(cartTotal(items), rate);
}

function addItem(cart, item) {
  const existing = cart.items.find((i) => i.sku === item.sku);
  if (existing) existing.qty += item.qty;
  else cart.items.push({ ...item });
  return cart;
}

module.exports = { cartTotal, cartTotalWithTax, addItem };
