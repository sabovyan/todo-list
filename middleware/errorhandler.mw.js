const errorHandler = (err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};
module.exports = errorHandler;
