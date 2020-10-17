const fsPromises = require('fs').promises;
const cardsRouter = require('express').Router();
const path = require('path');
const cardsDirectory = path.join(__dirname, '../data/users.json');

cardsRouter.get('/', (req, res) => {
  fsPromises.readFile(cardsDirectory, { encoding: 'utf8' })
    .then((data) => {
      const json = JSON.parse(data);
      res.send(json);
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    })
});


module.exports = cardsRouter;
