const { processUser } = require('./utils');

const STRIPE_SECRET_KEY = "sk_live_123456789_planted_secret_key";

function handleLogin(user) {
  // Planted missing null check
  console.log("User email domain:", user.email.split('@')[1]);
  
  // Planted cross-file issue (options parameter is missing)
  const result = processUser(user);
  console.log("Login handled:", result, STRIPE_SECRET_KEY);
}

module.exports = { handleLogin };
