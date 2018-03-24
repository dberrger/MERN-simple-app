const mongoose = require( "mongoose" );
// const md5 = require( "md5" );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    id: { type: String, required: false },
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true}
}, {collection: "users"});

module.exports = mongoose.model( "User", userSchema );