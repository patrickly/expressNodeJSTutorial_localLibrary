// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// HOmepage router
router.get('/', function(req, res) {
  res.send('Wiki home page');
})

// About page router
router.get('/about', function(req, res){
  res.send('About this wiki');
})

module.exports = router; 
