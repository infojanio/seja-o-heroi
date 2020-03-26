const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

//Rota para listar todos os dados ongs 
routes.get('/ongs', OngController.index);   
//Rota de cadastro ongs
routes.post ('/ongs', OngController.create);
 
//Rota para listar um profile especifico
routes.get('/profile', ProfileController.index);


//Rota para listar todos os dados incidents 
routes.get('/incidents', IncidentController.index); 
//Rota de cadastro Incidents
routes.post ('/incidents', IncidentController.create);
//Rota para deletar um incident
routes.delete ('/incidents/:id', IncidentController.delete)

module.exports = routes; 
