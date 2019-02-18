const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new Order object
// This is similar to a Sequelize model
var OrderSchema = new Schema({
    // `title` must be of type String
    items:{
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  });
  
  // This creates our model from the above schema, using mongoose's model method
  var Order = mongoose.model("Order", OrderSchema);
  
  // Export the Note model
  module.exports = Order;
  