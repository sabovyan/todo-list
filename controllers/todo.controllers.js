const Task = require('../models/todo.models');
const ErrorWithCode = require('../helpers/ErrorWithResponseCode.helper');

exports.read = async (req, res) => {
  const todos = await Task.find();

  if (!todos) {
    throw new ErrorWithCode(404, 'Your tasks are not found');
  }
  const response = {
    success: true,
    data: todos,
  };
  res.status(200).json(response);
};

exports.create = async (req, res) => {
  try {
    const todo = await Task.create(req.body);

    const response = {
      success: true,
      data: todo,
    };
    res.status(200).json(response);
  } catch (err) {
    const response = {
      success: false,
      error: err.message,
      data: null,
    };
    res.status(404).json(response);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;

  const todo = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  const response = {
    success: true,
    data: todo,
  };
  res.status(200).json(response);
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  const response = {
    success: true,
    data: null,
  };
  res.status(200).json(response);
};
