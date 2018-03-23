require( "./model" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router();


router.post( "/",  controller.create);

// router.delete( "/booking",  controller.qwe);

// router.get("/history", controller.history);

// router.post("/times", controller.history);

module.exports = router;