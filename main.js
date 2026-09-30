const { processUser } = require('./utils');

function handleLogin(user) {
  if (user) {
    const result = processUser(user);
    console.log("Login handled:", result);
  }
}

module.exports = { handleLogin };
