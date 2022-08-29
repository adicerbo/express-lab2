// require packages/dependencies
const express = require('express');
const res = require('express/lib/response');
const port = 3000
const app = express();

app.get("/greeting/:name", (req, res) => {
    res.send("Hello " + req.params.name)
})


app.listen(port, function() {
    // console.log("hello")
})


app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(req.params.tipPercentage)
});