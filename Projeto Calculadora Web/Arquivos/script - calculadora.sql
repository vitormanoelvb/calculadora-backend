CREATE DATABASE calculadora;

USE calculadora;

CREATE TABLE historico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  expressao VARCHAR(255),
  resultado VARCHAR(100),
  data_operacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
