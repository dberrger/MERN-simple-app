// const logger = require( "../../utilities/logger" );
const mongoose = require('mongoose');
const repository = require("./repository");


const User = mongoose.model("User");

exports.register = (req, res) => {
    console.log("HELLO FROM CONTROLLER")
    console.log(req.body.username)
    User.findOne({
        'username': req.body.username
    }, 'firstName', function (err, person) {
        console.log(person);

        if (err) return res.status(500);
        if (person === null) {
            console.log("USER HAVE NOT BEEN FOUND => IT WILL BE ADDED TO DB")
            repository.saveUser(req.body)
                .then(savedUser => {
                    console.log("ASJDKL")
                    res.status(200).send({
                        ok: true
                    });
                });
        } else {
            res.status(200).send({
                ok: false
            });
        }
    });

};