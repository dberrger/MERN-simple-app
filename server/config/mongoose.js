const config = require('./db');
const mongoose = require('mongoose');

module.exports = function (app) {
    mongoose.connect('mongodb://dberrger:6226026testbase@ds121299.mlab.com:21299/users');
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on('error', () => {
        console.log('Connection to DATABASE error!');
    })

    db.once('open', () => {
        console.log("Connection to DATABASE successful!");

    })
}