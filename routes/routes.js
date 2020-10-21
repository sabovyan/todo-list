const express = require('express');

const router = express.Router();

let todos = [
  {
    id: 'a1',
    value: 'go to school',
    isEdit: false,
  },
  {
    id: 'a2',
    value: 'discover universe',
    isEdit: false,
  },
  {
    id: 'a3',
    value: 'create a new planet',
    isEdit: false,
  },
];

router.get('/', (req, res) => {
  const response = {
    status: 'success',
    data: todos,
  };
  res.status(200).send(response);
});

router.post('/', (req, res) => {
  todos.push(req.body);
  const response = {
    status: 'success',
    data: todos,
  };
  res.status(200).send(response);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  if (JSON.stringify(req.body) === JSON.stringify({})) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEdit: true } : todo
    );
  } else {
    const { value } = req.body;
    const { isEdit } = req.body;

    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEdit, value } : todo
    );
  }
  const response = {
    status: 'success',
    data: todos,
  };
  res.status(200).json(response);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  const response = {
    status: 'success',
    data: {},
  };
  res.status(200).json(response);
});

module.exports = router;
