# Ficha-Resumo: Padrões de Projeto para API REST com Node.js

---

## 1. MVC (Model-View-Controller)

- **Descrição:**  
  Separa a aplicação em três camadas:  
  - **Model:** Representa os dados e regras de negócio.  
  - **View:** Camada responsável pela apresentação (interface, templates).  
  - **Controller:** Manipula as requisições, interage com Model e responde a View.

- **Uso em API REST:**  
  O View pode ser minimalista (JSON). O Controller lida com rotas e chama o Model.

- **Vantagens:**  
  Organiza bem a aplicação, facilita manutenção e testes.

- **Desvantagens:**  
  Pode ficar confuso quando a lógica do negócio cresce muito, já que Model pode ficar inchado.

---

## 2. Repository Pattern

- **Descrição:**  
  Cria uma camada intermediária entre o domínio (Model) e a fonte de dados (banco), abstraindo operações de acesso a dados (CRUD).

- **Uso em API REST:**  
  Facilita trocar a fonte de dados sem impactar a lógica da aplicação, separa responsabilidades e melhora a testabilidade.

- **Vantagens:**  
  - Isola a lógica de acesso a dados.  
  - Facilita mock em testes unitários.  
  - Facilita manutenção e escalabilidade.  

- **Por que escolhemos?**  
  Porque queremos uma estrutura clara, que permita evoluir a API e trocar banco de dados sem mudar o código da aplicação.

---

## 3. Service Layer (Camada de Serviço)

- **Descrição:**  
  Intermediário entre Controllers e Repositories/Models, onde a lógica de negócio complexa é implementada.

- **Uso em API REST:**  
  Controllers chamam Services que aplicam regras de negócio antes de acessar dados via Repository.

- **Vantagens:**  
  Organiza a lógica de negócio em um lugar separado, deixa Controllers mais limpos.

- **Desvantagens:**  
  Adiciona mais camadas, podendo aumentar a complexidade.

---

## Conclusão

Para a API de produtos e clientes que construímos, o **Repository Pattern** foi escolhido por promover uma arquitetura mais modular, facilitar a manutenção e permitir testes unitários eficazes, além de deixar o projeto preparado para crescer e mudar sem dores.
