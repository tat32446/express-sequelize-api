
const Physician = require("../../models").Physician;
const Patient = require("../../models").Patient;

const getPhysicians = (req, res) => {
  Physician.findAll({
    include: [Patient]
    })
    .then(physicians => {
      res.json(physicians);
      })
      .catch(err => res.json(err));
}

const getPhysicianById = (req, res) => {
  
    Physician.findAll({
        where: { id: req.params.id }
      })
        .then(physician => {
          res.json(physician[0]);
        })
        .catch(err => res.json(err));
}

const createPhysician = (req, res) => {
    Physician.create({
        name: req.body.name
      })
        .then(res => {
          res.json(res);
        })
        .catch(err => res.json(err));
}

const updatePhysician = (req, res) => {

    Physician.update({ name: req.body.name }, { where: { id: req.params.id } })
    .then(updatedPhysician => {
      res.json(updatedPhysician);
    })
    .catch(err => res.json(err));
}

const deletePhysician = (req, res) => {
    Physician.destroy({
        where: { id: req.params.id }
      })
        .then(physician => {
          res.json(physician);
        })
        .catch(err => res.json(err));
}

module.exports = {
  getPhysicians,
  getPhysicianById,
  createPhysician,
  updatePhysician,
  deletePhysician,
}