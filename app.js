const express = require('express');
const app = express(); 
const volleyball = require("volleyball");
const nunjucks = require("nunjucks");
const tweetBank = require("./tweetBank")
const routes = require('./routes');
app.use('/', routes);



app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views',{ noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.use(volleyball)

app.use(express.static('./public'))


let port = 3000
app.listen(port,function(){console.log(`Listening on port ${port}!`)})