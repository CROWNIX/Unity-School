const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {createComment} = require('../controllers/commentController');

router.post('/comments', [
    check('schoolId', 'SchoolId tidak boleh kosong').trim().isLength({min: 1}), 
    check('username', 'Username tidak boleh kosong').trim().isLength({min: 1}), 
    check('message', 'Message tidak boleh kosong').trim().isLength({min: 1}), 
], createComment);

module.exports = router;