const express = require('express');

const router = express.Router();

const todos = [
  {
    id: 1,
    value: 'go to school',
  },
  {
    id: 2,
    value: 'discover universe',
  },
  {
    id: 3,
    value: 'create a new planet',
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

router.get('/:id', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;
