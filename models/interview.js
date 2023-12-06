
const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  }],
});

module.exports = mongoose.model('Interview', InterviewSchema);