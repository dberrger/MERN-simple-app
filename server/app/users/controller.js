// const logger = require( "../../utilities/logger" );
const mongoose = require('mongoose');
const repository = require("./repository");
const jwt = require("jsonwebtoken");


const User = mongoose.model("User");

exports.register = (req, res) => {
    console.log(req.body)
    User.findOne({
        'username': req.body.username
    }, 'username', function (err, person) {

        if (err) return res.status(500);
        if (person === null) {
            repository.saveUser(req.body)
                .then(savedUser => {
                    res.success("Registration successful");
                });
        } else {
            res.failure("user already exist!");
        }
    });

};

exports.authenticate = (req, res) => {
    console.log(req.body.password);
    console.log(req.body.username);
    if ( !req.body.password || !req.body.username) {
        res.failure("Password || Username required")
        return;
    }

    repository.findUserByData(req.body).then(
        user => {
            console.log(user)
            if (user === null || !user && user.password !== req.body.password) {
                res.failure("Authentification failed");
                return;
            }

            const token = jwt.sign({
                id: user._id,
                username: user.username
            }, 'shhhhh');
            console.log(`Authentication successful! Token: ${token}`);

            res.success(token);
        },
        err => {
            res.failure(err);
        }
    )
}


exports.profile = (req, res) => {

    repository.findUserById(req.decodedUser.id).then(
        user => {
            delete user._id;
            res.success(user);
        }
    );
    
};