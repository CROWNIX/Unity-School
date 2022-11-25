const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {login, register, logout} = require('../controllers/authController');

router.post('/login', [
    check('username', 'Username tidak boleh kosong').trim().isLength({min: 1}), 
    check('email', 'Email tidak boleh kosong').trim().isLength({min: 1}), 
],login);
router.post('/register', [
    check('username', 'Username tidak boleh kosong').trim().isLength({min: 1}), 
    check('email', 'Email tidak boleh kosong').trim().isLength({min: 1}), 
    check('email', 'Email tidak valid').isEmail(),
    check('password', 'Password harus minimal 8 karakter').trim().isLength({min: 8}),
    check('confirmPassword', 'Konfirmasi password tidak sesuai').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Konfirmasi password tidak sesuai');
        }
        return true;
    })
],register);
router.post('/logout', logout);

module.exports = router;