const db = require('../db');

const produtoRepository = {
  findAll: (callback) => {
    db.query('SELECT * FROM produtos', callback);
  },
  create: (produto, callback) => {
    db.query('INSERT INTO produtos SET ?', produto, callback);
  }
};

module.exports = produtoRepository;
