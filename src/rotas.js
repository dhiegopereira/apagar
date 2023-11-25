const express = require('express');
const { listarCategorias } = require('./controladores/listarcategorias');
const { autenticaUsuario } = require('./intermediarios/autenticador');
const { login } = require('./controladores/usuarios');


const rotas = express();

rotas.get('/categoria', listarCategorias);

rotas.post('/login', login);
rotas.use(autenticaUsuario)

module.exports = rotas;
