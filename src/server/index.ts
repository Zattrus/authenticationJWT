import express from 'express';
import { makerSignInController } from '../factories/makerSignInController';
import { makerSignUpController } from '../factories/makerSignUpController';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();

app.use(express.json())

app.post('/sign-up', routeAdapter(makerSignUpController()));
app.post('/sign-in', routeAdapter(makerSignInController()));


app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
})
