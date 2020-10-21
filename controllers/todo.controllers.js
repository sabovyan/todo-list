let todos = [
  {
    id: 'ttodo_1',
    value: 'go to school',
    isEdit: false,
  },
  {
    id: 'ttodo_2',
    value: 'discover universe',
    isEdit: false,
  },
  {
    id: 'ttodo_3',
    value: 'create a new planet',
    isEdit: false,
  },
];

exports.read = (req, res) => {
  const response = {
    status: 'success',
    data: todos,
  };
  res.status(200).send(response);
};
exports.create = (req, res) => {
  todos.push(req.body);
  const response = {
    status: 'success',
    data: todos,
  };
  res.status(200).send(response);
};

exports.update = (req, res) => {
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
};

exports.remove = (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  const response = {
    status: 'success',
    data: {},
  };
  res.status(200).json(response);
};
