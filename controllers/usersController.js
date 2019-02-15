const db = require("../models");

// Defining methods for the userController
module.exports = {
    // for creating a user, the req.body should have email and password
    createUser: function(req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // for deleting a user
    deleteUser: function(req, res) {
        console.log(req.body);
        db.User
            .deleteOne({ _id: req.params.id })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};