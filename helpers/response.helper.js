const createResponse = (success, data) => {
  const response = {
    success,
    data,
  };
  return response;
};
module.exports = createResponse;
