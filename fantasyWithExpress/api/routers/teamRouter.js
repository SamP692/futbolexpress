const express = require('express');
const TeamController = require('../controllers/TeamController');

const router = express.Router();

router.get('/findbyleague', TeamController.findByLeagueId);
router.get('/findbyid/:id', TeamController.findById);

module.exports = router;
