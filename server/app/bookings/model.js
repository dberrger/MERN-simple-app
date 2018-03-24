const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const bookingSchema = new Schema( {
    id: { type: String, required: false },
    firstName: { type: String, required: true },
    phone: { type: String, required: true },
    specialist: { type: String, required: true },
    date:  { 
            date: {type: Number, required: false},
            months: {type: Number, required: false},
            time: {type: String, required: false},
            years: {type: Number, required: false}
            },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model( "Booking", bookingSchema );