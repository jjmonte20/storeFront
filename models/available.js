const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// available Schema
var AvailableSchema = new Schema({
    // name needs to be some string
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    }
});

// model for the above schema
var Available = mongoose.model("Available", AvailableSchema);

// Export to the Available Model
module.exports = Available;