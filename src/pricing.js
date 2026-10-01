const { PROMOS } = require('./promos');
const { round } = require('./money');

const TIERS = { gold: 0.15, silver: 0.1 };

function applyDiscount(total, code, customer) {
  const tier = TIERS[customer.tier] ?? 0;
  const promo = PROMOS[code] ?? 0;
  return round(total * (1 - Math.max(promo, tier)));
}

function priceWithTax(total, rate = 0.18) {
  return round(total * (1 + rate));
}

module.exports = { TIERS, applyDiscount, priceWithTax };
