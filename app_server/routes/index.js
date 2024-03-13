const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); // Import the controller
const ctrlOthers = require('../controllers/others'); // Import the controller

/* Locations page */
router.get('/', ctrlLocations.homelist); // Create a route that maps the home page URL to the index function in the controller
router.get('/location', ctrlLocations.locationInfo); // Create a route that maps the location page URL to the locationInfo function in the controller
router.get('/location/review/new', ctrlLocations.addReview); // Create a route that maps the add review page URL to the addReview function in the controller

/* Other pages */
router.get('/about', ctrlOthers.about); // Create a route that maps the about page URL to the about function in the controller  


module.exports = router;