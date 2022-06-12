const Sequelize = require('sequelize');
connection = require('./database');

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    idPergunta: { // futuramente substituir por uma chave estrangeira
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {})

Resposta.sync({ force: false})
    .then(() => {
        console.log('Tabela Resposta criada com sucesso!');
})

module.exports = Resposta
