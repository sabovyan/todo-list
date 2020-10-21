const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const api = require('./routes/routes');
const errorHandler = require('./middleware/errorhandler.mw');
const handleNotFoundPage = require('./middleware/handleNotFoundPage.mw');
const connectDb = require('./config/connectDb');

dotenv.config({ path: './config/config.env' });

const app = express();

connectDb();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use('/api/todos', api);

app.use(errorHandler);
app.use(handleNotFoundPage);

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
