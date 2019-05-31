const express = require('express');
const services = require('../services');

const router = express.Router();

const {PatientService}=services;


router.get('/patients', (req, res) => {
  PatientService.getPatient(req,res);
});

router.post('/patient', (req, res) => {
  PatientService.createPatient(req,res);
});

router.put('/patient/:id', (req, res) => {
  PatientService.updatePatient(req, res);
});

router.delete('/patient/:id', (req, res) => {
  PatientService.deletePatient(req, res);
});



module.exports = router;
