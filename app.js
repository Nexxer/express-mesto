const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f9a50e852e0855c14e06a75',
  };

  next();
});

app.use('/', routes);

app.listen(PORT);
