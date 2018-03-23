const mongoose = require("mongoose");

const Booking = mongoose.model("Booking");
const User = mongoose.model("User");

const createBooking = (decodedUser, data) => {
console.log(data);
    const booking = new Booking(data);
    return User.findOne({
        '_id': decodedUser.id
    }).then(
        user=>{
            console.log(booking);
        
            user.history.push(booking);
            console.log(user);
            user.save().then(
                success=> {
                    console.log("URA")
                   
                },
                err=> {
                    console.log("NE URA")
                    
                }
            ); 
        }
    );


};

// const findArticles = () => Article.find( );

// const findDetails = ( id ) => Article.findOne( { _id: id } );

module.exports = {
    createBooking
};