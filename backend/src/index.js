const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express(); //criação da variável

app.use(cors()); //caso estivesse em produção: app.use(cors({origin:http://meuapp.com})); //endereço da aplicação q acessaria o backend
app.use(express.json());
app.use(routes);

app.listen(3333); //definição da porta para rodar o Node

// Utilizaremos o Query Buil der (Knex.js) - exemplo: table('users').select(*).where()