const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {getAllComments, getCommentById, createComment, updateComment, deleteComment} = require('../controllers/adminCommentController');
const {getAllSchools, getSchoolById, createSchool, updateSchool, deleteSchool} = require('../controllers/adminSchoolController');

//? Schools
router.get('/schools', getAllSchools);
router.get('/schools/:schoolId', getSchoolById);
router.post('/schools', createSchool);
router.put('/schools/:schoolId', updateSchool);
router.delete('/schools/:schoolId', deleteSchool);

//? Commments
router.get('/comments', getAllComments);
router.get('/comments/:commentId', getCommentById);
router.post('/comments', createComment);
router.put('/comments/:commentId', updateComment);
router.delete('/comments/:commentId', deleteComment);

module.exports = router;
