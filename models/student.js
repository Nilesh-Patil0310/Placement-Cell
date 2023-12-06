const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
  },
  status: {
    type: String,
    enum: ['placed', 'not_placed'],
    required: true,
  },
  scores: {
    dsa: {
      type: Number,
    },
    webd: {
      type: Number,
    },
    react: {
      type: Number,
    },
  },
  interviews: [{
    company: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    result: {
      type: String,
      enum: ['PASS', 'FAIL', 'On Hold', 'Didn\'t Attempt'],
    },
  }],
});

module.exports = mongoose.model('Student', StudentSchema);