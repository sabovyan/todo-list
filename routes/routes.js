const { Router } = require('express');
const asyncWrapper = require('../middleware/asyncWrapper');

const {
  create,
  read,
  update,
  remove,
} = require('../controllers/todo.controllers');

const router = Router();

router.route('/').get(asyncWrapper(read)).post(asyncWrapper(create));

router.route('/:id').put(asyncWrapper(update)).delete(asyncWrapper(remove));

module.exports = router;
