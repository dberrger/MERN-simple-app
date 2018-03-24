const mongoose = require("mongoose");

const Booking = mongoose.model("Booking");
const User = mongoose.model("User");


const createBooking = (decodedUser, data) => {
    const {
        id
    } = decodedUser.id;
    console.log(decodedUser);
    const booking = new Booking(data);
    return User.findOne({
            '_id': decodedUser.id
        })
        .then(user => {
            booking.ownerId = user;
            booking.save();
            return booking;
        })
        .catch(err => {
            console.log("Some error while searching ID user");
            return err;
        });
};

const findAllBookingTimesByDate = (dateB) => {
    const {
        date,
        years,
        months
    } = dateB;

    return Booking.find({
            'date.date': date,
            'date.years': years,
            'date.months': months
        }).select({
            '_id': 0,
            'date.time': 1
        })
        .then(
            times => {
                console.log("BOOKING TIMES ARRAY");
                return times;
            }
        )
        .catch(err => (err));
}


const findHistory = (decodedUser) => {
    return Booking.find({
            'ownerId': decodedUser.id
        }).select({
            'firstName': 1,
            'phone': 1,
            'specialist': 1,
            'date': 1,
            '_id': 1
        })
        .then(history => ({
            history
        }))
        .catch(err => (err))
}


const findBookingByID = (id) => Booking.findOne({
    "_id": id
});

const deleteBooking = (booking) => booking.remove();

module.exports = {
    createBooking,
    findAllBookingTimesByDate,
    findHistory,
    deleteBooking,
    findBookingByID
};