const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {  //lista todos os dados da tabela
        const ongs = await connection ('ongs').select('*');  //seleciona todos os dados da tabela
    
        return response.json(ongs);
    },

    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
    // colunas a serem inseridas na tabela 
    await connection('ongs').insert({  //insere campos na tabela
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
        
    return response.json( {id} );  //É necessário retornar o id, pois será o código para a empresa se cadastrar 
    }
};