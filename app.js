const express = require('express')
const app = express()
const universitiesController = require('./controller/universitiesController')
app.set("view engine","ejs");


app.use('/universities', universitiesController)
app.listen(2020, () => {
    console.log('server is listening on port 2020')
})

