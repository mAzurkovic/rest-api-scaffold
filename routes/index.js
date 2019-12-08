var express = require('express');
var router = express.Router();

const Item = require('../models/item');

router.get('/', function(req, res, next) {
  res.sendStatus(200);
});

router.post('/:name', function(req, res) {
  // Create new item object
  var item = new Item(
    { name: req.params.name }
  );

  // Use mongoose to save it in db
  item.save(function(err) {
    if (err) { return next(err); }
    res.sendStatus(200);
  });
  
});

module.exports = router;
