const repository = require("./repository");
const timeSelect = require('../../util/timeSelect');
const convertObjToArr = require('../../util/arrayConv');

exports.create = (req, res) => {
    repository.createBooking(req.decodedUser, req.body)
        .then(createdBooking => {
            console.log("New booking has been added to DB!");
            res.success("New booking has been added to DB!");
        })
        .catch((err) => {
            res.faulure("Some error has occured while creating new booking");
        });


};

exports.history = (req, res) => {
    repository.findHistory(req.decodedUser)
        .then(history => {
            console.log(history);
            res.success(history);
        })
        .catch(err => res.failure(err));
}

exports.times = (req, res) => {

    repository.findAllBookingTimesByDate(req.body)
        .then(times => {
            const pureTimes = convertObjToArr(times);
            console.log(pureTimes);
            const avaliable = timeSelect.avaliableTimes(pureTimes, req.body);;
            res.success(avaliable)
        })
        .catch(err => {
            console.log(err)
        })

}

exports.delete = (req, res) => {
    console.log(req.body);
    repository.findBookingByID(req.body.id).then(booking => {
        console.log(booking);
        console.log("Booking by id hs founded")
       return booking
    }, err => ({
        err
    })).
    then(booking => {
        repository.deleteBooking(booking).then(
                success => {
                    console.log(success);
                    res.success("Booking has been deleted successfully!!");
                })
            .catch(err => {
                console.log(err)
            })
    }).catch(err => {
        console.log(err)
    })
}