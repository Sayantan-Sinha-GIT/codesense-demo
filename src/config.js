// Settings that differ between environments.

module.exports = {
  currency: process.env.CURRENCY || 'INR',
  taxRate: Number(process.env.TAX_RATE || 0.18),
};
