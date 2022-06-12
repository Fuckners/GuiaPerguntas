// importações
// express
const express = require('express');
const app = express();

// body parser
const bodyParser = require('body-parser');

// conexão com o db
const connection = require('./databases/database');

// módulo Pergunta
const Pergunta = require('./databases/Pergunta')

// módulo Resposta
const Resposta = require('./databases/Resposta')

// Database
connection
    .authenticate()
    .then(() => { // caso a conexão dê certo
        console.log('Conexão com o banco de dados foi feita com sucesso!')
    })
    .catch((error) => { // caso dê erro
        console.log('Houve um erro durante a conexão com o banco de dados:')
        console.log(error)
    })

// Usar EJS como View Engine, ou seja, usar EJS para renderizar meu HTML
app.set('view engine', 'ejs');

// nomeando a pasta 'public' como pasta padrão para arquivos estáticos
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false })); // receber dados de formulários
app.use(bodyParser.json()); // receber dados em json / converter os dados em json (usado mais em conjunto com API's)


// Rotas
app.get('/', (req, res) => {
    // SELECT * FROM Perguntas
    Pergunta.findAll({
        raw: true, // pegar somente os dados, sem informações extras (dados "crus")
        order: [ // ordenar a exibição dos dados
            ['id', 'DESC'] // ASC = crescente | DESC = decrescente
        ]
    })
        .then((perguntas) => {
            res.render('index', { perguntas });
        });
});

app.get('/pergunta/:id', (req, res) => {
    const id = req.params.id
    Pergunta.findOne({
        raw: true,
        where: { id }
    })
        .then((pergunta) => {
            if (pergunta != null) {
                Resposta.findAll({
                    raw: true,
                    where: { idPergunta: id },
                    order: [
                        ['id', 'DESC']
                    ]
                })
                    .then((respostas) => {
                        res.render('pergunta', {pergunta, respostas})
                    })
            } else {
                res.redirect('/')
            }
        })
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    const titulo = req.body.titulo; // name que está no formulário
    const descricao = req.body.descricao; // name que está no formulário

    // INSERT INTO PERGUNTAS...
    Pergunta.create({
        // como o nome das variaveis que estão recebendo os dados, e as colunas da tabela são iguais, não precisa ficar repetindo o nome, ex: titulo : titulo, descricao: descricao...
        titulo,
        descricao
    })
        .then(() => { // caso a pergunta seja salva com sucesso
            res.redirect('/')
            console.log('Pergunta salva no banco de dados!');
        })
        .catch((error) => { // caso ocorra um erro durante o salvamento da pergunta
            res.redirect('/perguntar') // redireciona pro /perguntar
            console.log('Não foi possivel salvar a pergunta no banco de dados!');
            console.log(error);
        })
});

app.post('/salvarresposta', (req, res) => {
    const corpo = req.body.corpo; // name que está no formulário
    const idPergunta = req.body.idPergunta

    Resposta.create({
        corpo,
        idPergunta
    })
        .then(() => { // caso a pergunta seja salva com sucesso
            console.log('Pergunta salva no banco de dados!');
        })
        .catch((error) => { // caso ocorra um erro durante o salvamento da pergunta
            console.log('Não foi possivel salvar a pergunta no banco de dados!');
            console.log(error);
        })
    res.redirect(`/pergunta/${idPergunta}`)
});

app.listen(8080, (error) => {
    if (error) {
        console.log('Houve um problema durante a inicialização do servidor!');
    } else {
        console.log("Servidor rodando com sucesso!");
    }
});