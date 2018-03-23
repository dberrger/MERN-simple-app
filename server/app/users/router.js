require( "./model" );
// const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router();

router.post( "/register",  controller.register);


module.exports = router;