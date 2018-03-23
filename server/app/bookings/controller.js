const repository = require("./repository");

exports.create = (req, res) => {
    console.log(req.body);
    repository.createBooking(req.decodedUser, req.body).then(
        success => {
            console.log(success);
            
        },
        error => {
            console.log(error);
        }
    )
    
};