import express from 'express';
import { makerSignInController } from '../factories/makerSignInController';
import { makerSignUpController } from '../factories/makerSignUpController';

const app = express();

app.use(express.json())

app.post('/sign-up', async (req, res) => {
  const signUpController = makerSignUpController()

  const {statusCode, body} = await signUpController.handle({
    body: req.body
  })

  res.status(statusCode).json(body)
});

app.post('/sign-in', async (req, res) => {
  const signInController = makerSignInController()

  const {statusCode, body} = await signInController.handle({
    body: req.body
  })

  res.status(statusCode).json(body)
});


app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
})
