// // // // // // // PASS IT AROUND
const express = require('express');
const res = require('express/lib/response');
const port = 3001;
const app = express();
// let num = 99
app.listen(3001);

app.get("/", (req, res) => {
    res.send("99 bottles of beer on the wall " + '<br> </br>' + 
    "<a href='/pass'>Take one down, pass it around</a>")
    
});