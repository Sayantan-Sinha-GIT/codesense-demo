function processUser(user, options) {
  console.log("Processing user:", user.name, "with format:", options.format);
  return { id: user.id, status: 'processed', format: options.format };
}

module.exports = { processUser };
