const cardsRouter = require('express').Router();
const path = require('path');
const readFile = require('../utils/read_file');

const cardsDirectory = path.join(__dirname, '../data/users.json');

cardsRouter.get('/', (req, res) => {
  readFile(cardsDirectory)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = cardsRouter;
