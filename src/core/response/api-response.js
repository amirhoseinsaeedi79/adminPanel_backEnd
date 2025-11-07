const ApiResponse = (res, status, data, message) => {
  return res.status(status).json({ message, data, status });
};

export default ApiResponse;
