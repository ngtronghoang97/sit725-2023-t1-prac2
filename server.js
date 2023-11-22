var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json())
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

app.get('/addTwoNumbers', function (req,res) {
    let numA = req.query.numA;
    let numB = req.query.numB;
    let sum = parseInt(numA) + parseInt(numB);
    let answer = {Answer:sum, message:'Addition Successful', statusCode:200}
    console.log(answer)
    res.json(answer);
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})
