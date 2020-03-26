const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
        .where ('id', id)
        .select('name')
        .first();   //retorna apenas 1 resultado

        if (!ong) {
            return response.status(400).json( { error: 'Nenhuma ONG com este ID foi encontrada! ' });
        } 
        return response.json(ong); //se tudo der certo, retorna os dados da ong 
    }
}