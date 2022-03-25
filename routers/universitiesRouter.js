const express = require('express')
const router = express.Router()
const {
    getAllUnivirsitiesController,
    getUniversitiesByCountryController
} = require('../controller/universitiesController');

router.get("/", getAllUnivirsitiesController)

router.get("/countries", getUniversitiesByCountryController)

module.exports = router