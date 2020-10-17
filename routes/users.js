const fsPromises = require('fs').promises;
const usersRouter = require('express').Router();
const path = require('path');
const usersDirectory = path.join(__dirname, '../data/users.json');


usersRouter.get('/', (req, res) => {
  fsPromises.readFile(usersDirectory, { encoding: 'utf8' })
    .then((data) => {
      const json = JSON.parse(data);
      if (!json) {
        res.status(404).send({ message: 'Запрашиваемый ресурс не найден' })
      }
      res.send(json);
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    })
});

usersRouter.get('/:_id', (req, res) => {
  fsPromises.readFile(usersDirectory, { encoding: 'utf8' })
    .then((data) => {
      const json = JSON.parse(data);
      const { _id} = req.params;
      const userId = json.find((i) => i._id === _id);
      if (!userId) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(userId);
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
})

module.exports = usersRouter;
