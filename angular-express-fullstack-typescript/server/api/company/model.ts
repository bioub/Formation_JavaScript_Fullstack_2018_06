import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  city: String,
  updated: { type: Date, default: Date.now },
});

export const Model = mongoose.model('Company', schema);
