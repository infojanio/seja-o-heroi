const connection = require('../database/connection');

//responsável pelo perfil de uma única ong
module.exports = {
    async index (request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select ('*');

        return response.json(incidents);
    }
}