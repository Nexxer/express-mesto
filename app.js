const express = require('express');
const app = express();
const path = require('path');
const { PORT = 3000 } = process.env;
const users = require('./routes/users');
const cards = require('./routes/cards');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/cards', cards);

app.listen(PORT, () => {
  console.log('Ссылка на сервер: localhost:' + PORT);
});