const express = require('express');
const OngController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //Desacopla o módulo Router do express em uma nova variável

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do BackEnd
  * POST: Criar uma informação do BackEnd
  * PUT: Alterar uma informação do BackEnd
  * DELETE: Deletar uma informação do BackEnd
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parametros nomeados enviados  na rota após "?" podendo ser (filtros, paginação)  UTILIZAMOS "QUERY" PARA CRIAR UM REQUEST 
   * Route Params: Parametros utilizados para identificar recursos  UTILIZAMOS "PARAMS" PARA CRIAR UM REQUEST
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos  UTILIZAMOS "BODY" PARA CRIAR UM REQUEST
   */

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); //diretorio raiz com parametros de requisicao e resposta

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes; //exporta todas as variáveis 'routes'