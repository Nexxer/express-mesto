const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        const regex = /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$/;
        // const regex = /(^https?:\/\/)(www\.)?(\D?\d?[a-z]?)+$#?/gm;
        return regex.test(v);
      },
      message: 'Введите корректный url',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
