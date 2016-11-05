const express = require('express');
const LeagueController = require('../controllers/LeagueController');

const router = express.Router();

router.get('/find', LeagueController.find);
// router.post('/newleague', LeagueController.new);

module.exports = router;
