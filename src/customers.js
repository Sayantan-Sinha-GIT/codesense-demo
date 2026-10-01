// A small in-memory customer list. Guests have no account, so they are not here.

const customers = new Map([
  ['c1', { id: 'c1', name: 'Asha', tier: 'gold' }],
  ['c2', { id: 'c2', name: 'Ravi', tier: 'silver' }],
  ['c3', { id: 'c3', name: 'Mei', tier: null }],
]);

/** The customer with this id, or null for guests and unknown ids. */
function findCustomer(id) {
  return customers.get(id) ?? null;
}

module.exports = { findCustomer };
