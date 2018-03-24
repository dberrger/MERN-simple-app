require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router();


router.post("/authenticate", controller.authenticate);
router.post( "/register",  controller.register);

router.get("/profile",validateToken, controller.profile);

module.exports = router;