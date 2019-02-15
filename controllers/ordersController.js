const db = require("../models");

// Defining methods for the ordersController
module.exports = {
    // finding all of the orders for a particular user
    findAll: function(req, res){
        db.User
            .find({ _id: req.user._id})
            .populate("orders")
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // finding one order so I can populate with items
    findOneOrder: function(req, res){
        db.Order
            .findOne({ _id: req.params.id })
            .populate("items")
            .then(dbOrder => res.json(dbOrder))
            .catch(err => res.status(422).json(err));
    },
    // for creating an order
    createOrder: function(req, res){
        db.Order
            .create(req.body)
            .then(dbOrder => {
                // need URL to be the userId
                return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { orders: dbOrder._id } }, { new: true })
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // for deleting an order, need orders id in the URL
    deleteOrder: function(req, res){
        db.Order
            .deleteOne({ _id: req.params.id })
            .then(dbOrder => {
                console.log("deleted");
                res.json(dbOrder);
            })
            .catch(err => res.status(422).json(err));
    }
};