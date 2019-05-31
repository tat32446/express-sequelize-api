const Appointment = require("../../models/appointment").Appointment;
const Physician = require("../../models/physician").Physician;
const Patient = require("../../models/patient").Patient;

const getAppointments = (req, res) => {
  
    Appointment.findAll({
        include: [Physician, Patient]
      }).then(appointments => {
        res.json(appointments);
      });


}

const getAppointmentById = (req, res) => {
  
    Appointment.findAll({
        where: { id: req.params.id },
        include: [Physician, Patient]
      }).then(appointment => {
        res.json(appointment[0]);
      });
}

const createAppointment = (res, req) => {
    Appointment.create({
        physicianId: req.body.physicianId,
        patientId: req.body.patientId
      })
        .then(appointments => {
          res.json(appointments);
        })
        .catch(err => res.json(err));
}

const updateAppointment = (req, res) => {

    Appointment.update(
        { physicianId: req.body.physicianId, patientId: req.body.patientId },
        { where: { id: req.params.id } }
      )
        .then(updatedAppointment => {
          res.json(updatedAppointment);
        })
        .catch(err => console.log(err));
}

const deleteAppointment = (res, req) => {
    Appointment.destroy({
        where: { id: req.params.id }
      }).then(appointment => {
        res.json(appointment);
      });
}

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
}

