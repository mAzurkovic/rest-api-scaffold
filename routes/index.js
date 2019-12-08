var express = require('express');
var router = express.Router();

const Item = require('../models/item');

router.get('/', function(req, res, next) {
  var nameQuery = req.query.name;

  // Return all if no query specified
  if (typeof nameQuery == 'undefined') {
    Item.find(function(err, items) {
      if (err) return console.error(err);
      res.send(items);
    });
  } else {
  // Return by item name
    Item.find({name: nameQuery}, function(err, items) {
      if (err) return console.error(err);
      res.send(items);
    });
  }
});

router.post('/:name', function(req, res) {
  // Create new item object
  var item = new Item(
    { name: req.params.name }
  );

  // Use mongoose to save it in db
  item.save(function(err) {
    if (err) return next(err);
    res.sendStatus(200);
  });
  
});

module.exports = router;
