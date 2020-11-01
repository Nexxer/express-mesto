const usersRouter = require('express').Router();
const {
  getUsers,
  getUserId,
  createUser,
} = require('../controllers/users');

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUserId);

usersRouter.post('/', createUser);

module.exports = usersRouter;
