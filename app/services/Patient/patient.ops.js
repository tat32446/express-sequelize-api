
const Physician = require("../../models/physician").Physician;
const Patient = require("../../models/patient").Patient;

const getPatient = (req, res) => {
  
    Patient.findAll({
        include: [Physician]
      })
        .then(patients => {
          res.json(patients);
        })
        .catch(err => res.json(err));
}

const getPatientById = (req, res) => {
  
    Patient.findAll({
        where: { id: req.params.id }
      })
        .then(patient => {
          res.json(patient[0]);
        })
        .catch(err => res.json(err));
}

const createPatient = (res, req) => {
    Patient.create({
        name: req.body.name
      })
        .then(res => {
          res.json(res);
        })
        .catch(err => res.json(err));
}

const updatePatient = (req, res) => {

    Patient.update({ name: req.body.name }, { where: { id: req.params.id } })
    .then(updatedPatient => {
      res.json(updatedPatient);
    })
    .catch(err => res.json(err));
}

const deletePatient = (res, req) => {
    Patient.destroy({
        where: { id: req.params.id }
      })
        .then(patient => {
          res.json(patient);
        })
        .catch(err => res.json(err));
}

module.exports = {
  getPatient,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
}