import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import mariadbRouter from './routes/mariadb';
import cors from 'cors';

const app = express();
const basePath = '/';
const port = 6200;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(basePath, mariadbRouter);

app.listen(port, () => {
  console.log('Backend Port : ', port);
});

export default app;

