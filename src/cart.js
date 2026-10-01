const { round } = require('./money');

function cartTotal(items) {
  return round(items.reduce((sum, item) => sum + item.price * item.qty, 0));
}

function addItem(cart, item) {
  const existing = cart.items.find((i) => i.sku === item.sku);
  if (existing) existing.qty += item.qty;
  else cart.items.push({ ...item });
  return cart;
}

module.exports = { cartTotal, addItem };
