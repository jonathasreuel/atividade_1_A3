CREATE DATABASE loja;

USE loja;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  preco DECIMAL(10,2)
);

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);

CREATE USER 'jonathasreuel'@'localhost' IDENTIFIED BY '01234567';

-- Dar permissões ao banco "loja"
GRANT ALL PRIVILEGES ON loja.* TO 'jonathasreuel'@'localhost';

-- Aplicar mudanças
FLUSH PRIVILEGES;

EXIT;
