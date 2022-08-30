// require packages/dependencies
const express = require('express');
const res = require('express/lib/response');
const port = 3000
const app = express();

// // // // // // // // GREETING
app.get("/greeting/:name", (req, res) => {
    res.send("Hello " + req.params.name)
});

app.listen(port, function () {
    // console.log("hello")
});


// // // // // // // // TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Tip: " + req.params.total * (req.params.tipPercentage/100))
});

// // // // // // // // MAGIC 8 BALL
let ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

let answers = ball[Math.floor(Math.random()*ball.length)];
// console.log(answers)

app.get("/magic/:answer", (req, res) => {
    res.send(`<h1>${answers}</h1>`)
});


