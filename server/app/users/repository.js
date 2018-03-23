const mongoose = require( "mongoose" );

const User = mongoose.model( "User" );

const saveUser = ( data ) => {
    const user = new User( data );
    return user.save();
};

const deleteUser = ( user ) => user.remove();

const findUser = ( id ) => User.findOne( { id } );

module.exports = {
    saveUser,
    deleteUser,
    findUser,
};