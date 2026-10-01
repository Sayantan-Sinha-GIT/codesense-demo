const { applyDiscount } = require('./pricing');
const { cartTotal } = require('./cart');
const { formatInvoice } = require('./invoice');

const orders = [];

function createOrder(customer, cart, promoCode) {
  const subtotal = cartTotal(cart.items);
  const total = applyDiscount(subtotal, promoCode);
  const order = { id: orders.length + 1, customer, items: cart.items, total, shipping: cart.shipping ?? null };
  orders.push(order);
  return { order, invoice: formatInvoice(order) };
}

function findOrder(id) {
  return orders.find((o) => o.id === id) ?? null;
}

module.exports = { createOrder, findOrder };
