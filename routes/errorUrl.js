const errorUrl = require('express').Router();

errorUrl.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = errorUrl;
