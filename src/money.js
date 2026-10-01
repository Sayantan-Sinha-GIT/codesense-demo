// Money helpers. Amounts are plain numbers in the shop's currency.

function round(amount) {
  return Math.round(amount * 100) / 100;
}

function formatMoney(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount);
}

module.exports = { round, formatMoney };
