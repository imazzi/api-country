const express = require("express"); 
const app = express();
const axios = require('axios');
const url= 'http://universities.hipolabs.com/search';
const {htmlToText}= require('html-to-text')


const getAllUnivirsities=((req, res) => {
    axios.get(url)
    .then(response=>{
      res.render("index",{universities: response.data})
    }).catch((err)=>{
      res.render("error",{errdata:htmlToText(err.response.data)})
    });
})

const getUniversitiesByCountry=((req, res) => {
  if(req.query.country === ''){
    res.render("error",{errdata:"country name is undefined"})
  }

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
    getUniversitiesByCountry
}