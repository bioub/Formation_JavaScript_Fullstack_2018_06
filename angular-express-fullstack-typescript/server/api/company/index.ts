import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createCtrl, listCtrl, removeCtrl, showCtrl, updateCtrl } from './controllers';

const companyRouter = express.Router();

companyRouter.get('/',
  listCtrl,
);

companyRouter.post('/',
//  authenticate,
//  isAdmin,
  bodyParser.json(),
  createCtrl,
);

companyRouter.get('/:id',
  showCtrl,
);

companyRouter.delete('/:id',
  removeCtrl,
);

companyRouter.patch('/:id',
  bodyParser.json(),
  updateCtrl,
);

export {
  companyRouter,
};
