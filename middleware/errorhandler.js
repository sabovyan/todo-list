const ErrorWithCode = require('../helpers/ErrorWithResponseCode.helper');

const errorHandler = (err, req, res) => {
  let message = 'internal server error';
  let code = '500';
  if (err instanceof ErrorWithCode) {
    code = err.code;
    message = err.message;
  }

  const response = {
    success: false,
    error: message,
    data: null,
  };
  res.status(code).json(response);
};
module.exports = errorHandler;
