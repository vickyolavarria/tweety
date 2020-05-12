const express = require('express');
const app = express(); 

function loggingMiddleware (req, res, next) {
    console.log("hola")
    next()
    // hacé tu logueo acá.
    // llamá a `next`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
}

app.use(loggingMiddleware)

//app.get('/is-anybody-in-there', function (req, res) {
//    res.send('<h1>hola</h1>');
//})

let port = 3000
app.listen(port,function(){console.log(`Listening on port ${port}!`)})