const usersRouter = require('express').Router();
const path = require('path');
const readFile = require('../utils/read_file');

const usersDirectory = path.join(__dirname, '../data/users.json');

usersRouter.get('/', (req, res) => {
  readFile(usersDirectory)
    .then((data) => {
      if (!data) {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
      res.send(data);
    });
});

usersRouter.get('/:_id', (req, res) => {
  readFile(usersDirectory)
    .then((data) => {
      const { _id } = req.params;
      const userId = data.find((i) => i._id === _id);
      if (!userId) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(userId);
    })
    .catch(() => {
      res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = usersRouter;
