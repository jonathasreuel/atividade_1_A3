const produtoRepository = require('../repositories/produtoRepository');

exports.listar = (req, res) => {
  produtoRepository.findAll((err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
};

exports.criar = (req, res) => {
  const produto = req.body;
  produtoRepository.create(produto, (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId, ...produto });
  });
};
