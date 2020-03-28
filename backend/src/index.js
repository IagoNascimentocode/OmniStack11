const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/** METODOS HTTP:
 * 
 * GET - BUSCA/LISTA INFORMAÇÕES DO BACKEND 
 * POST - CRIA A IFNROMAÇÃO NO BACKEND
 * PUT - ALTERA UMA INFORMAÇÃO DO BACKEND
 * DELETE - DELETA A INFORMAÇÃO
 * 
 */

 /**
  *  TIPOS DE PARÂMETROS
  *  Query params : Parêmetros nomeados enviados na rota após "?" (serve para filtors, paginação, )
  * 
  *  Route params : Parãmentro utilizado para identificar recursos
  * 
  *  Request Body: Corpo da requisição resposanvel por criar e alterar recursos
  * 
  */

  /**
   * SQL: MySQL , SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NOSQL: MongoDB, CouchDB
   */

   /**
    * Driver: Select * FROM users
    * Query Builder: table ('users').select(*).where()
    */


app.listen(3333);
