
const Physician = require("../../models").Physician;
const Patient = require("../../models").Patient;

const getPatient = (req, res) => {
  
   Patient.findAll({

        include: [Physician]
      })
        .then(patients => {
          res.json(patients);
        })
        .catch(err => {
          res.json(err);
          console.log(err);

        } );
       
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


const createPatient = (req, res) => {
    Patient.create({
        name: req.body.name
      })
        .then(res => {
          res.json(res);
        })
        .catch(err => {
          
          console.log(err);
          res.json(err)
    
        }
        
        );

}

const updatePatient = (req, res) => {

    Patient.update({ name: req.body.name }, { where: { id: req.params.id } })
    .then(updatedPatient => {
      res.json(updatedPatient);
    })
    .catch(err => res.json(err));
}

const deletePatient = (req, res) => {
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