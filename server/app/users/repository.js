const mongoose = require( "mongoose" );

const User = mongoose.model( "User" );

const saveUser = ( data ) => {
    const user = new User( data );
    return user.save();
};

const deleteUser = ( user ) => user.remove();

const findUserById = ( id ) =>  (User.findOne({ '_id': id },"username lastName firstName email"));


const findUserByData = (data) => (User.findOne({username: data.username}));


module.exports = {
    saveUser,
    deleteUser,
    findUserById,
    findUserByData
};