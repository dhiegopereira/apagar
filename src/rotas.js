const express = require('express');
const { listarCategorias } = require('./controladores/listarcategorias');
const { autenticaUsuario } = require('./intermediarios/autenticador');
const { login } = require('./controladores/login');
const { cadastrarUsuario } = require('./controladores/cadastrarUsuario');
const { detalharPerfil } = require('./controladores/usuarios');


const rotas = express();

rotas.get('/categoria', listarCategorias);

rotas.post('/usuario', cadastrarUsuario)

rotas.post('/login', login);

rotas.use(autenticaUsuario)

rotas.get('/usuario', detalharPerfil)

module.exports = rotas;
