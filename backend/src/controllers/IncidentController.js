const connection = require('../database/connection');

module.exports = {
    //método que lista todos os incidents
async index (request, response) {
//método para fazer a paginação de 5 em 5
const { page=1 } = request.query;

const [count] = await connection('incidents').count(); //conta a quantidade de casos cadastrados
console.log(count);

    const incidents = await connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5) //vou limitar a 5 registros por página
    .offset( (page - 1) * 5)  //Pula os 5 primeiros registros, ex: (2-1)*5=5  
    .select([
    'incidents.*', 
    'ongs.name', 
    'ongs.email', 
    'ongs.whatsapp', 
    'ongs.city', 
    'ongs.uf']);

    response.header('X-Total-Count', count['count(*)'] ) //retorna o total de itens na lista
    return response.json(incidents);
},

//método que cria incidents
async create (request, response) {
    const {  title, description, value  } = request.body;

    const ong_id = request.headers.authorization;   //authorization foi definido no insomnia 

    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    });

    return response.json( {id} );
},

async delete (request, response) {
const { id } = request.params;
const ong_id = request.headers.authorization; 

//verifica se o incident da ong a ser deletado será deletado por ela própria
const incident = await connection('incidents')
.where('id', id)
.select ('ong_id')
.first(); 

if(incident.ong_id != ong_id) {
    return response.status(401).json( {erro: 'Operação não permitida!'});  //Usuário não tem autorização
}
await connection('incidents').where('id', id).delete();
return response.status(204).send();  //retorna resposta sem conteúdo
}
};

