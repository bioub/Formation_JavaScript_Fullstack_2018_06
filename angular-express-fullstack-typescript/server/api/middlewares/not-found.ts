/**
 * Not Found Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function notFound(req, res) {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
}
