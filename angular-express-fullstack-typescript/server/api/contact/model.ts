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
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  updated: { type: Date, default: Date.now },
});

/*
schema.pre('save', () => {

})
*/

export const ContactModel = mongoose.model('Contact', schema);
