# [GuiaPerguntas](http://137.184.100.34) 🔗
⬆⬆⬆ [Site de perguntas e respostas](http://137.184.100.34) criado durante o curso de Node.js do Guia do Programador    
O site vai estar rodando até o dia 10/07 em um droplet do [DigitalOcean](https://cloud.digitalocean.com/)!    

## ⭐ Projeto Concluído (Passivo de futuras atualizações) ⭐

## Tencologias usadas 👾

![Badge](https://img.shields.io/badge/bodyparser-v^1.20.0-%237159c1?style=flat-square)
![Badge](https://img.shields.io/badge/ejs-v^3.1.8-%237159c1?style=flat-square)
![Badge](https://img.shields.io/badge/express-v^4.18.1-%237159c1?style=flat-square)
![Badge](https://img.shields.io/badge/mysql2-v^2.3.3-%237159c1?style=flat-square)
![Badge](https://img.shields.io/badge/sequelize-v^6.20.1-%237159c1?style=flat-square)
![Badge](https://img.shields.io/badge/slugify-v^1.6.5-%237159c1?style=flat-square)

- Node.js
- Javascript
- Bootstrap
- MySQL

## Funcionalidades 📌
- [x] Cadastro de perguntas
- [x] Cadastro de respostas
- [x] Listagem das perguntas
- [ ] Busca de perguntas
- [ ] Edição de perguntas e respostas
- [ ] Exclusão de perguntas e respostas

## Páginas 🚢
![Página de perguntas](assets/perguntas.png)    
![Página para fazer pergunta](assets/perguntar.png)    
![Página para responder pergunta](assets/responder.png)    


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Fuckners/GuiaPerguntas>

# Acesse a pasta do projeto no terminal/cmd
$ cd guiaperguntas

# Acesse a pasta databases
$ cd databases

# Abra o arquivo database.js
$ nano database.js

# Edite a senha (12345678) para a sua senha do mysql

# Salve as alterações usando Ctrl + X

# Volte para a pasta principal
$ cd ../

# Instale as dependências
$ npm install

# Execute a aplicação
$ node server.js

# Caso dê erro, abra o mysql
$ mysql

# E use o seguinte comando:
$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'minhasenha';

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>

# Faça o máximo de perguntas que puder!
```

### Autor
<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100722316?s=400&u=a71fc45baf666450aafd21e99aa729e48b1f1552&v=4" width="100px;"/>
 <br>
 <sub><b>Felipe Fuckner Clariano</b></sub></a>
 
 Entre em contato! 💌
 
[![Linkedin Badge](https://img.shields.io/badge/-Felipe%20Fuckner-blue?style=flat-square&logo=Linkedin&logoColor=white&)](https://www.linkedin.com/in/felipe-fuckner-b65a49237) 
[![Gmail Badge](https://img.shields.io/badge/-felipefclariano04@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:felipefclariano04@gmail.com)
