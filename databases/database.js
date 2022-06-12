const Sequelize = require('sequelize')

//                               nome Data Base   usuário      senha
const connection = new Sequelize('guiaperguntas', 'root', '12345678', {
    host : 'localhost', // onde está rodando o mysql
    dialect: 'mysql'
});

module.exports = connection;