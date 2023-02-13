const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log('error');
  res.json({
    ip: req.ip,
    api: req.originalUrl,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { errorHandler };
