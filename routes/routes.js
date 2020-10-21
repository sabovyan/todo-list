const { Router } = require('express');
const controllerWrapper = require('../middleware/controlWrapper.mw');

const {
  create,
  read,
  update,
  remove,
} = require('../controllers/todo.controllers');

const router = Router();

router.route('/').get(read).post(create);

router.route('/:id').put(update).delete(remove);

module.exports = router;
