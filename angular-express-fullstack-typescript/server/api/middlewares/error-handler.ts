/**
 * Error Handler Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
export function errorHandler(err, req, res, next) {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
}
