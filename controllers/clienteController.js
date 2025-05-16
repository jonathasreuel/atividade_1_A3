const clienteRepository = require('../repositories/clienteRepository');

exports.listar = (req, res) => {
  clienteRepository.findAll((err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
};

exports.criar = (req, res) => {
  const cliente = req.body;
  clienteRepository.create(cliente, (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId, ...cliente });
  });
};
