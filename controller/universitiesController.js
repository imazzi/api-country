const express = require("express");
const app = express();
const {
    getAllUnivirsities,
    getUniversitiesByCountry
} = require('../service/universitiesService');

const getAllUnivirsitiesController = ((req, res) => {
    getAllUnivirsities().then(response => {
            res.render("index", { universities: response.data })
        }).catch((err) => {
            res.render("error", { errdata: "Can't reach the server" })
        });
})

const getUniversitiesByCountryController = ((req, res) => {
    if (req.query.country  === '') {
      res.render("error", { errdata: "country name is undefined" })
    }
  
    getUniversitiesByCountry(req.query.country ).then(response => {
  
        res.render("index", { universities: response.data })
      }).catch(err => {
        res.render("error", { errdata: "Can't reach the server" })
    })
  
  })



module.exports = {
    getAllUnivirsitiesController,
    getUniversitiesByCountryController
  }