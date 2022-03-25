const express = require("express");
const app = express();
const axios = require('axios');
const url = 'http://universities.hipolabs.com/search';


function getAllUnivirsities() {
  return  axios.get(url);
}

function getUniversitiesByCountry(countryName){
  return   axios.get(url + '?country=' + countryName);

}


module.exports = {
  getAllUnivirsities,
  getUniversitiesByCountry
}