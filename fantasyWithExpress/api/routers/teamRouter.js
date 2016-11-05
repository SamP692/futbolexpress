const express = require('express');
const TeamController = require('../controllers/TeamController'); // !!!!

const router = express.Router();

router.get('/findbyleague', TeamController.findByLeagueId);
// router.post('/newleague', LeagueController.new);

module.exports = router;
