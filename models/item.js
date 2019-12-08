var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define schema for MongoDB
var itemSchema = new Schema({
    name: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Item', itemSchema);