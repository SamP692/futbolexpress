const express = require('express');
const PlayerController = require('../controllers/PlayerController');

const router = express.Router();

router.get('/find/:id', PlayerController.findById);

module.exports = router;
