const db = require("../models");

module.exports = {
    // find all of the items in this table
    findAll: function(req, res){
        db.Available
            .find({})
            .then(dbAvailable => res.json(dbAvailable))
            .catch(err => res.status(422).json(err));
    },
    // create an item for the database
    create: function(req, res){
        db.Available
            .create(req.body)
            .then(dbAvailable => res.json(dbAvailable))
            .catch(err => res.status(422).json(err))
    }
}