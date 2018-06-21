const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test');

const Contact = mongoose.model('Contact', { firstName: String, lastName: String });


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/api/contacts', async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

app.get('/api/contacts/:id', async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return next();
  res.json(contact);
});

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found',
  });
});

app.listen(8080, () => {
  console.log('Server started');
});
