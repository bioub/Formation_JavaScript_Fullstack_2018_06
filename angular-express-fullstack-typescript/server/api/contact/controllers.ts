import { Contact } from './model'

/**
 * Controller Contact List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function listCtrl(req, res, next) {
  const contacts = await Contact.find();
  res.json(contacts);
};

/**
 * Controller Contact Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function showCtrl(req, res, next) {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      req.notFoundReason = 'Contact not found';
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Contact Create
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function createCtrl(req, res, next) {
  const contact = await Contact.create(req.body);
  res.statusCode = 201;
  res.json(contact);
};

/**
 * Controller Contact Remove
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function removeCtrl(req, res, next) {
  const contact = await Contact.findByIdAndRemove(req.params.id)
  res.json(contact);
};

/**
 * Controller Contact Update
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function updateCtrl(req, res, next) {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.json(contact);
};

export {
  listCtrl,
  showCtrl,
  createCtrl,
  updateCtrl,
  removeCtrl,
};
