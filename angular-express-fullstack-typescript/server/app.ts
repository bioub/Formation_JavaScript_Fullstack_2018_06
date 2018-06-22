import * as express from 'express';
import * as morgan from 'morgan';
import { config } from './config';
import { contactRouter } from './api/contact';
import { companyRouter } from './api/company';
import { notFound } from './api/middlewares/not-found';
import { errorHandler } from './api/middlewares/error-handler';

const app = express();

if (!config.production) {
  app.use(morgan('dev'));
}

app.use('/api/contacts', contactRouter);
app.use('/api/companies', companyRouter);

// Exercice : Créer un dossier /server/api/societe en s'inspirant de contact
// et l'importer ici
// app.use('/api/societes', contactRouter);

// Facultatif: regarder le chapitre population de mongoose
// et lier les société du coté contact
// pour qu'une requete sur contact réponde :
// {
//   "firstName": "Steve"
//   "lastName": "Jobs",
//   "societe": {
//     "name": "Apple"
//   }
// }

app.use(notFound); // next()
app.use(errorHandler); // next(err)

export {
  app,
};
