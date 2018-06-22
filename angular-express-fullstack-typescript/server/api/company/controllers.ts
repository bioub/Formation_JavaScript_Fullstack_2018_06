import { Model } from './model'
import { Company } from '../../../common/models/company';

/**
 * Controller Company List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function listCtrl(req, res, next) {
  try {
    const entities: Company[] = await Model.find().limit(100);
    res.json(entities);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Company Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function showCtrl(req, res, next) {
  try {
    const entity: Company = await Model.findById(req.params.id);

    if (!entity) {
      req.notFoundReason = 'Company not found';
      return next();
    }

    res.json(entity);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Company Create
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function createCtrl(req, res, next) {
  try {
    const entity = await Model.create(req.body);
    res.statusCode = 201;
    res.json(entity);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Company Remove
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function removeCtrl(req, res, next) {
  try {
    const entity = await Model.findByIdAndRemove(req.params.id);

    if (!entity) {
      req.notFoundReason = 'Company not found';
      return next();
    }

    res.json(entity);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Company Update
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
async function updateCtrl(req, res, next) {
  try {
    const entity = await Model.findByIdAndUpdate(req.params.id, req.body);

    if (!entity) {
      req.notFoundReason = 'Company not found';
      return next();
    }

    res.json(entity);
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
