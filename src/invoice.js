const { formatMoney } = require('./money');

function formatInvoice(order) {
  const lines = order.items.map((item) => `${item.qty} x ${item.name}: ${formatMoney(item.price * item.qty)}`);
  const shipTo = `Ship to: ${order.shipping.address.city}`;
  return [`Invoice #${order.id}`, shipTo, ...lines, `Total: ${formatMoney(order.total)}`].join('\n');
}

module.exports = { formatInvoice };
