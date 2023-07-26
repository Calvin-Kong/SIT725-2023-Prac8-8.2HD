let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/',(req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    let num1 = req.query.number1; // is 1
    let num2 = req.query.number2; // is 2
    let result = parseInt(num1) + parseInt(num2);

    let code = 200;
    let msg = 'sucess';

    let resObj = {data:result,statusCode:code,message:msg}

    // '1' vs 1
    res.json(resObj);
});

app.listen(port, ()=>{
    console.log('server started, listening to port: ' + port);
});