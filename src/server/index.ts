import express from 'express';
import { makerListLeadsController } from '../factories/makerListLeadsController';
import { makerSignInController } from '../factories/makerSignInController';
import { makerSignUpController } from '../factories/makerSignUpController';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();

app.use(express.json())

app.post('/sign-up', routeAdapter(makerSignUpController()));
app.post('/sign-in', routeAdapter(makerSignInController()));

app.get('/leads', (req, resp, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return resp.sendStatus(401);
    }
    next();

  },
  routeAdapter(makerListLeadsController())
);

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
})
