const express = require('express');
const router_led = express.Router();
import LightController from "../controller/LightController";

let Light = new LightController();

router_led.use(function(req, res, next) {
    // do logging
    // console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});



router_led.use('/mode/:mode', (req, res) => { //set status
    Light.setMode(req, res);
});

router_led.use('/', (req, res) => {   //show mode
    Light.getMode(req, res);
});

module.exports = router_led;