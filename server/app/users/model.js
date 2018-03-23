const mongoose = require( "mongoose" );
// const md5 = require( "md5" );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    id: { type: String, required: false },
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true},
    history: { type: Array, required: true },
}, {collection: "users"});

// userSchema.methods.setPass = function( password ) {
//     this.password = md5( password );
// };

// userSchema.methods.checkPass = function( password ) {
//     return this.password === md5( password );
// };

module.exports = mongoose.model( "User", userSchema );