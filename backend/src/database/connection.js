const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //aqui escolhi a conexão de desenvolvimento, que depois será production
module.exports = connection;