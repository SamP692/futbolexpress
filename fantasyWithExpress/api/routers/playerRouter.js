const express = require('express');
const PlayerController = require('../controllers/PlayerController');

const router = express.Router();

router.get('/find/:id', PlayerController.findById);
// router.post('/newleague', LeagueController.new);

module.exports = router;
