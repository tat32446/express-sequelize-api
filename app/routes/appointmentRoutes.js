const express = require('express');
const services = require('../services');

const router = express.Router();

const {AppointmentService}=services;


router.get('/appointments', (req, res) => {
  AppointmentService.getAppointments(req,res)
});

router.post('/appointment', (req, res) => {
  AppointmentService.createAppointment(req, res);
});

router.put('/appointment/:id', (req, res) => {
  AppointmentService.updateAppointment(req, res);
});

router.delete('/appointment/:id', (req, res) => {
  AppointmentService.deleteAppointment(req, res);
});



module.exports = router;


