const { formatMoney } = require('./money');

function formatInvoice(order) {
  const lines = order.items.map((item) => `${item.qty} x ${item.name}: ${formatMoney(item.price * item.qty)}`);
  return [`Invoice #${order.id}`, ...lines, `Total: ${formatMoney(order.total)}`].join('\n');
}

module.exports = { formatInvoice };
