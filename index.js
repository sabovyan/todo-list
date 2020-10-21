const express = require('express');
const path = require('path');
const api = require('./routes/routes');
const errorHandler = require('./middleware/errorhandler.mw');
const getNotFoundPageError = require('./middleware/page404.mw');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use('/api/todos', api);

app.use(getNotFoundPageError);
app.use(errorHandler);

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
