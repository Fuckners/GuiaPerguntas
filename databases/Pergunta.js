const Sequelize = require('sequelize');
connection = require('./database');

// criação da tabela pergunta
const Pergunta = connection.define(/*Nome tabela: */'pergunta', {
    titulo : {
        type: Sequelize.STRING, // definir titulo como type STRING (textos curtos)
        allowNull: false // impedir a criação de campos vazios
    },
    descricao: {
        type: Sequelize.TEXT, // definit cdescrição como type TEXT (textos grandes)
        llowNull: false
    }
}, {/* Descrição */});

Pergunta.sync( // criar a tabela
    {force: false }) // não vai recriar a tabela Pergunta, caso já exista
    .then(() => {
        console.log('Tabela Pergunta criada com sucesso!');
    });

module.exports = Pergunta // exportando o módulo Pergunta