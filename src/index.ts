import express from 'express';
import dotenv_expand from 'dotenv-expand';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv_expand(dotenv.config());

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.post('/', (request, response) => {
  response.send(request.body);
});

app.listen(port, () => console.log(`Running on ${process.env.APP_URL}`));
