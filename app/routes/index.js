const express = require('express');

const router = express.Router();

router.use('/',require('./appointmentRoutes'));
router.use('/',require('./patientRoutes'));
router.use('/',require('./physicianRoutes'));


module.exports = router;