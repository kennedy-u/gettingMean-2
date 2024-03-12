const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main'); // Import the controller

/* GET home page. */
router.get('/', ctrlMain.index); // Create a route that maps the home page URL to the index function in the controller

module.exports = router;