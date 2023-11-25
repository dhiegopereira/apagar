const express = require('express');
const { listarCategorias } = require('./controladores/listarcategorias');

const rotas = express();

rotas.get('/categoria', listarCategorias);

module.exports = rotas;