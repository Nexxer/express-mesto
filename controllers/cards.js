const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((card) => {
      if (card) {
        res.status(200).send(card);
      }
      res.status(404).send({ message: 'Такой карточки нет' });
    })
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const createCard = (req, res) => {
  const owner = req.user._id;
  Card.create({ owner, ...req.body })
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (card) {
        res.status(200).send(card);
      }
      res.status(404).send({ message: 'Такой карточки нет' });
    })
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
