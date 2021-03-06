import { ContactModel } from './model'
import { Contact } from '../../../common/models/contact';

/**
 * Controller Contact List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function listCtrl(req, res, next) {
  try {
    const contacts = await ContactModel.find({}, 'firstName lastName').limit(100);
    res.json(contacts);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Contact Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function showCtrl(req, res, next) {
  try {
    const contact: Contact = await ContactModel.findById(req.params.id).populate('company');

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
  try {
    const contact = await ContactModel.create(req.body);
    res.statusCode = 201;
    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Contact Remove
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function removeCtrl(req, res, next) {
  try {
    const contact = await ContactModel.findByIdAndRemove(req.params.id);

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
 * Controller Contact Update
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function updateCtrl(req, res, next) {
  try {
    const contact = await ContactModel.findByIdAndUpdate(req.params.id, req.body);

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

export {
  listCtrl,
  showCtrl,
  createCtrl,
  updateCtrl,
  removeCtrl,
};
