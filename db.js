// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jonathasreuel',
  password: '01234567',
  database: 'loja'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;
