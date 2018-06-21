import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createCtrl, listCtrl, removeCtrl, showCtrl, updateCtrl } from './controllers';

const contactRouter = express.Router();

contactRouter.get('/',
  listCtrl,
);

contactRouter.post('/',
  bodyParser.json(),
  createCtrl,
);

contactRouter.get('/:id',
  showCtrl,
);

contactRouter.delete('/:id',
  removeCtrl,
);

contactRouter.patch('/:id',
  bodyParser.json(),
  updateCtrl,
);

export {
  contactRouter,
};
