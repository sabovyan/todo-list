const controllerWrapper = (fn) => (req, res, next) => {
  try {
    fn(req, res);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = controllerWrapper;
