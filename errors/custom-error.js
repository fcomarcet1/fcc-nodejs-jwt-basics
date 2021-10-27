class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

// throw new CustomAPIError ('Custom error message', 401);

module.exports = CustomAPIError;
