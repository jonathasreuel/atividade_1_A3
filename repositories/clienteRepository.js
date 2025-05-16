const db = require('../db');

const clienteRepository = {
  findAll: (callback) => {
    db.query('SELECT * FROM clientes', callback);
  },
  create: (cliente, callback) => {
    db.query('INSERT INTO clientes SET ?', cliente, callback);
  }
};

module.exports = clienteRepository;
