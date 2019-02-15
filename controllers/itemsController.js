const db = require("../models");

// Defining methods for the userController
module.exports = {
    // since we can find all the items in an order by using a call from orders
    // we should just look to make a create item and delete item
    addItem: function(req, res){
        db.Item
            .create(req.body)
            .then(dbItem => {
                return db.Order.findOneAndUpdate({ _id: req.params.id }, { $push: { items: dbItem._id }, new: true })
            })
            .then(dbOrder => res.json(dbOrder))
            .catch(err => res.status(422).json(err));
    },
    deleteItem: function(req, res){
        db.Item
            .deleteOne({ _id: req.params.id })
            .then(dbItem => {
                console.log("item deleted");
                res.json(dbItem);
            })
            .catch(err => res.status(422).json(err));
    }
};