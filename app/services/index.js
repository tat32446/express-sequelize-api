const AppointmentOps=require('./Appointment');
const PatientOps=require('./Patient');
const PhysicianOps=require('./Physician');

const AppointmentService=AppointmentOps.AppointmentService;
const PatientService=PatientOps.PatientService;
const PhysicianService=PhysicianOps.PhysicianService;

module.exports={
    AppointmentService,
    PatientService,
    PhysicianService
}
