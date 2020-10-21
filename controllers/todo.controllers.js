const createResponse = require('../helpers/response.helper');
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require('../services/todo.service');

exports.read = async (req, res) => {
  const todos = await getTasks();
  const response = createResponse(true, todos);

  res.status(200).json(response);
};

exports.create = async (req, res) => {
  const todo = await addTask(req.body);
  const response = createResponse(true, todo);

  res.status(200).json(response);
};

exports.update = async (req, res) => {
  const todo = await updateTask(req.params.id, req.body);
  const response = createResponse(true, todo);

  res.status(200).json(response);
};

exports.remove = async (req, res) => {
  await deleteTask(req.params.id);
  const response = createResponse(true, null);

  res.status(200).json(response);
};
