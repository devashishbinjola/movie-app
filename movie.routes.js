const express = require('express');
const Routers = express.Router();
const movieController = require('../controllers/movie.controller');


Routers.get('/movies',movieController.findAllMovies);

Routers.get('/movies/:id',movieController.findOne);


Routers.get('/movies/:id',movieController.findShows);


module.exports = Routers;