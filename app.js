const express = require('express');
const app = express(); 
const volleyball = require("volleyball");
const nunjucks = require("nunjucks");
const tweetBank = require("./tweetBank")

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views',{ noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.use(volleyball)

app.get('/is-anybody-in-there', function (req, res) {
const people = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
res.render("index", { title: "Hall of Fame", people: people });
})

//app.get("/tweet", function (req, res) {
//  res.send(add(getFakeName(),getFakeTweet()));
//});

var locals = {
  title: "An Example",
  people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }],
};
nunjucks.configure("views", { noCache: true });
nunjucks.render("index.html", locals, function (err, output) {
  console.log(output);
});

let port = 3000
app.listen(port,function(){console.log(`Listening on port ${port}!`)})