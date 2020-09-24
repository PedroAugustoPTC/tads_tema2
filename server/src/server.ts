import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);