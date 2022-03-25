const express = require("express"); 
const app = express();
const axios = require('axios');
const url= 'http://universities.hipolabs.com/search';


const getAllUnivirsities=((req, res) => {
    axios.get(url)
    .then(response=>{
      res.render("index",{universities: response.data})
    // res.send(response.data);

    })
})

const getUniversityByCountry=((req, res) => {
    axios.get(url+'?country='+req.query.country)
    .then(response=>{
      res.render("index",{universities: response.data})
    }).catch(err => { 
      console.error(err)
      res.redirect('/error') 
  })

})

module.exports ={
    getAllUnivirsities,
    getUniversityByCountry
}