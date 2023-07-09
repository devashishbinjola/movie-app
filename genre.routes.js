const express = require('express');
const Routers = express.Router();

const genreController = require('../controllers/genre.controller');

Routers.get('/genre',genreController.findAllGenres);



module.exports = Routers;