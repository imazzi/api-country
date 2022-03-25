const express = require('express')
const router = express.Router()
const  { 
    getAllUnivirsities,
    getUniversitiesByCountry
} = require('../service/universitiesService');

router.get("/",getAllUnivirsities)

router.get("/countries",getUniversitiesByCountry)

module.exports = router