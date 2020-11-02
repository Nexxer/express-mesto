const usersRouter = require('express').Router();
const {
  getUsers,
  getUserId,
  createUser,
} = require('../controllers/users');

usersRouter.get('/users', getUsers);

usersRouter.get('/users/:id', getUserId);

usersRouter.post('/users', createUser);

module.exports = usersRouter;
