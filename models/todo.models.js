const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, 'the task is required'],
    trim: true,
  },
  isEdit: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
