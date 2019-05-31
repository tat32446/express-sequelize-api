const express = require('express');
const services = require('../services');

const router = express.Router();

const {PhysicianService}=services;


router.get('/physicians', (req, res) => {
  PhysicianService.getPhysicians(req,res);
});

router.post('/physician', (req, res) => {
  PhysicianService.createPhysician(req,res);
});

router.put('/physician/:id', (req, res) => {
  PhysicianService.updatePhysician(req, res);
});

router.delete('/physician/:id', (req, res) => {
  PhysicianService.deletePhysician(req, res);
});



module.exports = router;
