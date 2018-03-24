require( "./model" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router();

router.delete( "/",  controller.delete);
router.post( "/",  controller.create);



router.get("/history", controller.history);


//THAT IS A BAD PRACTICE I KNOW! JUST TEMPORARY SOLUTION
 router.post("/times", controller.times);

module.exports = router;