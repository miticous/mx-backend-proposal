const { ValidationError } = require('express-validation');

// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  const errors = err.errors || [{ message: err.message }];

  return res.status(err.status || 500).json({ errors });
}
