const fsPromises = require('fs').promises;

module.exports = (pathFIle) => fsPromises.readFile(pathFIle, { encoding: 'utf8' })
  .then((file) => JSON.parse(file));
