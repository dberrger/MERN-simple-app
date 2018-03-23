const validateToken = require( "../middlewares/validateToken" );
const usersRouter = require('./users/router');
const bookingsRouter = require('./bookings/router');

module.exports = ( app ) => {
    app.use( "/", usersRouter);
    // app.use( "/booking", validateToken, bookingsRouter);
};