const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  interviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interview',
    required: true,
  },
  result: {
    type: String,
    enum: ['PASS', 'FAIL', 'On Hold', 'Didn\'t Attempt'],
    required: true,
  },
});

module.exports = mongoose.model('Result', ResultSchema);