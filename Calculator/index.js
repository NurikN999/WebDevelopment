const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 3030;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operator = req.body.operator;
    let result = 0;

    switch (operator){
        case '+':
            result = (num1 + num2);
            break;
        case '-':
            result = (num1 - num2);
            break;
        case '*':
            result = (num1 * num2);
            break;
        case '/':
            result = (num1 / num2);
            break;
        default:
            result = 0;
    }

    res.send("The result is " + result).status(200);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})