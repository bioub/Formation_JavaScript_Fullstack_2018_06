import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: String,
  telephone: String,
  updated: { type: Date, default: Date.now },
});


export const Contact = mongoose.model('Contact', schema);
