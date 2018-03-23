// const validateToken = require( "../middlewares/validateToken" );
const usersRouter = require('./users/router');

module.exports = ( app ) => {
    app.use( "/", usersRouter);
};