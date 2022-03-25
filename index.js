const express = require("express"); 
const app = express();
const axios = require('axios');
const url= 'http://universities.hipolabs.com/search?country=';
app.set("view engine","ejs");

app.get("/universities", (req, res) => {
    axios.get(url+req.query.country)
    .then(response=>{
      res.render("index",{universities: response.data})
    // res.send(response.data);

    })
});


app.listen(2020, () =>{
    console.log('serveur')
})

