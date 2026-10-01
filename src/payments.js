// Charges go through the payment provider. The key comes from the environment.

const PAYMENT_KEY = process.env.PAYMENT_KEY;

function charge(customer, amount) {
  if (!PAYMENT_KEY) throw new Error('PAYMENT_KEY is not set');
  if (amount <= 0) throw new Error('Nothing to charge');
  // A real shop would call its payment provider here.
  return { ok: true, customer: customer ? customer.id : 'guest', amount };
}

module.exports = { charge };
