CREATE DATABASE gama01;

USE gama01;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    cpf INT(11) NOT NULL,
    nome VARCHAR(65) NOT NULL,
    data_nasc VARCHAR(11) NOT NULL,
    email TEXT,
    profissao TEXT,
    celular INT(12) NOT NULL,
    cep INT(10) NOT NULL,
    logradouro TEXT,
    complemento TEXT,
    bairro TEXT,
    localidade TEXT,
    estado TEXT
)