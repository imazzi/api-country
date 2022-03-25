const express = require('express')
const router = express.Router()
const  { 
    getAllUnivirsities,
    getUniversityByCountry
} = require('../service/universitiesService');

router.get("/",getAllUnivirsities)

router.get("/countries",getUniversityByCountry)

module.exports = router