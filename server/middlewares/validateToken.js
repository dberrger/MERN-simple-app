const jwt = require( "jsonwebtoken" );

module.exports = function( req, res, next ) {
    const token = req.body.token || req.query.token || req.headers.authorization;
    console.log(token);
    console.log(req.body);
    if ( token ) {
        return jwt.verify( token, 'shhhhh', (err, decoded) => {
            if (err) return res.failure("Invalid token.");
            req.decodedUser = decoded;
            return next();
        } );
    }
    return res.unauthorized();
};