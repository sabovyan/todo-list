const Task = require('../models/todo.models');
const ErrorWithCode = require('../helpers/ErrorWithResponseCode.helper');

exports.getTasks = async () => {
  const todos = await Task.find();

  if (!todos) {
    throw new ErrorWithCode(404, 'Your tasks are not found');
  }
  return todos;
};

exports.addTask = async (body) => {
  const todo = await Task.create(body);

  if (!todo) {
    throw new ErrorWithCode(404, 'Your tasks are not found');
  }
  return todo;
};

exports.updateTask = async (id, body) => {
  const todo = await Task.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    throw new ErrorWithCode(404, 'Your tasks are not found');
  }
  return todo;
};

exports.deleteTask = async (id) => {
  await Task.findByIdAndDelete(id);
};
