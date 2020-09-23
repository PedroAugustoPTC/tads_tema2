import express, {request, response} from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
console.log(5);

app.listen(3333);