const express = require('express');
const {
  create,
  read,
  update,
  remove,
} = require('../controllers/todo.controllers');

const router = express.Router();

router.route('/').get(read).post(create);

router.route('/:id').put(update).delete(remove);

module.exports = router;
