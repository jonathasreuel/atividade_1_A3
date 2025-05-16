# Padrão Utilizado: Repository

### Descrição:
O padrão Repository atua como uma camada intermediária entre a lógica de negócio e a camada de acesso a dados. Ele permite isolar a lógica de persistência dos dados em um repositório dedicado, tornando a aplicação mais organizada, testável e de fácil manutenção.

### Benefícios:
- Separação de responsabilidades.
- Facilidade de teste e manutenção.
- Redução de código duplicado.
- Facilidade para trocar a fonte de dados.

### Estrutura no Projeto:
- `controllers/`: Camada de controle que chama os repositórios.
- `repositories/`: Contém a lógica de acesso ao banco de dados.
- `models/`: Define a estrutura dos dados.
- `database/`: Responsável pela conexão com o banco MySQL.
- `routes/`: Define as rotas expostas pela API.

### Tecnologias:
- Node.js
- Express
- MySQL (via mysql2)
- Padrão Repository

Este padrão foi aplicado tanto em `produtos` quanto em `clientes`.
