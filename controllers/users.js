const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      }
      res.status(404).send({ message: 'Такого пользователя нет' });
    })
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((id) => {
      if (id) {
        res.status(200).send(id);
        return;
      }
      res.status(404).send({ message: 'Такого пользователя нет' });
    })
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
};
