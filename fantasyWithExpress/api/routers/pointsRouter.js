const express = require('express');
const PointsController = require('../controllers/PointsController');

const router = express.Router();

router.get('/getvalues', PointsController.getValues);

module.exports = router;
