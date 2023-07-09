const express = require('express');
const Routers = express.Router();
const artistController = require('../controllers/artist.controller');

Routers.get('/artist',artistController.findAllArtists);


module.exports = Routers;