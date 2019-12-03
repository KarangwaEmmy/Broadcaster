import express from 'express';
import bodyparser from 'body-parser';
import path from  'path';
import userRouter from './V1/routes/userRouter';
import flagRoute from './V1/routes/flagRoute'

const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send({
  status:(200),
  message: ' Welcome to Broadcaster API endpoints!'
  + 'The platform of reg flags and intervations'
}));

app.use('/api/v1/auth', userRouter);
app.use('/api/v1', flagRoute);

let port = process.env.PORT || 8000;

const server = app.listen(port, console.log(`App running on port ${port}`));

export default server;
