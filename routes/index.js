const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( { name: name } );
    res.render( 'index', { tweets: list } );
  });

  router.post('/users', function(req, res) {
    var data = req.body;
    console.log(data)
    let nuevoTweet = tweetBank.add(data.name,data.content)
    res.redirect('/')
    
  });

  

  
module.exports = router;