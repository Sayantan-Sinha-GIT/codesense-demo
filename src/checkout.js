const { cartTotal } = require('./cart');
const { applyDiscount } = require('./pricing');
const { charge } = require('./payments');

/**
 * Charges the customer for everything in the cart.
 * A promo code is optional.
 */
function checkout(cart, promoCode) {
  const subtotal = cartTotal(cart.items);
  const total = applyDiscount(subtotal, promoCode);
  return charge(cart.customer, total);
}

module.exports = { checkout };
