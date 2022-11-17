const express = require('express');
const router = express.Router();
const {check} = require("express-validator");
const {getAllSchools, getSchoolById, createSchool, updateSchool, deleteSchool} = require('../controllers/adminSchoolController');

router.get('/schools', getAllSchools);
router.get('/schools/:id', getSchoolById);
router.post('/schools', createSchool);
router.put('/schools', updateSchool);
router.delete('/schools', deleteSchool);

module.exports = router;