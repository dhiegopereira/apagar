const express = require('express');
const { listarCategorias } = require('./controladores/listarcategorias');
const { autenticaUsuario } = require('./intermediarios/autenticador');
const { login } = require('./controladores/login');
const { cadastrarUsuario } = require('./controladores/cadastrarUsuario');


const rotas = express();

rotas.get('/categoria', listarCategorias);

rotas.post('/login', login);
rotas.post('/usuario', cadastrarUsuario)

rotas.use(autenticaUsuario)

module.exports = rotas;
