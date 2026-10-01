// Promo codes and the share of the price they take off.

const PROMOS = { SAVE10: 0.1, WELCOME: 0.05 };

function isPromoCode(code) {
  return Object.hasOwn(PROMOS, code);
}

module.exports = { PROMOS, isPromoCode };
