const express = require('express');
const { scheduleAppointment, getAppointments } = require('../controllers/appointmentController');

const router = express.Router();

router.post('/', scheduleAppointment);
router.get('/', getAppointments);

module.exports = router;
