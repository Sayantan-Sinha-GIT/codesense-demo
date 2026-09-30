function processUser(user) {
  console.log("Processing user:", user.name);
  return { id: user.id, status: 'processed' };
}

module.exports = { processUser };
