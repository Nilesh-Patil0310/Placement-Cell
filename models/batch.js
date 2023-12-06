const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Batch', BatchSchema);