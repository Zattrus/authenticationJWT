import express from 'express';
import { makeAuthenticationMiddleware } from '../factories/makeAuthenticationMiddleware';
import { makerListLeadsController } from '../factories/makerListLeadsController';
import { makerSignInController } from '../factories/makerSignInController';
import { makerSignUpController } from '../factories/makerSignUpController';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();

app.use(express.json())

app.post('/sign-up', routeAdapter(makerSignUpController()));
app.post('/sign-in', routeAdapter(makerSignInController()));

app.get('/leads',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makerListLeadsController())
);

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
})
