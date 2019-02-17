const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ItemSchema = new Schema({
  // `title` must be of type String
  name:{
    type: String,
    required: true
  },
  price: {
    type: Number, 
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Items = mongoose.model("Items", ItemSchema);

// Export the item model
module.exports = Items;
