const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtos');
const clientesRoutes = require('./routes/clientes');

app.use(express.json());
app.use('/produtos', produtosRoutes);
app.use('/clientes', clientesRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
