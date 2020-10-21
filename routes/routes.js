const express = require('express');
const controllerWrapper = require('../middleware/controlWrapper.mw');
const {
  create,
  read,
  update,
  remove,
} = require('../controllers/todo.controllers');

const router = express.Router();

router.route('/').get(read).post(controllerWrapper(create));

router
  .route('/:id')
  .put(controllerWrapper(update))
  .delete(controllerWrapper(remove));

module.exports = router;
