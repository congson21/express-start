const express = require('express');
const router = express.Router();

const locationController = require('../controller/LocationController');

router.get('/',locationController.showDetail)

module.exports = router;