require('dotenv').config();
const {User, otp} = require('../models');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateOTP = require('../utils/generateOTP');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rahmatfauzi.w@gmail.com',
        pass: 'geszgjkqeibswdeg',
    },
});

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await findUserByEmail(email);

        if(!user) return res.status(404).json({message: 'Login failed'});

        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(400).json({message: 'Login failed'});

        const {username, isAdmin} = user;

        const accessToken = jwt.sign({username, email, isAdmin}, process.env.ACCESS_TOKEN_SECRET);

        return res.status(200).json({message: 'Login successfully', user, accessToken});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const register = async (req, res) => {
    const {username, email, password} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});


    try {
        if(await findUserByUsername(username)) return res.status(404).json({message: 'Username has been registered'})


        if(await findUserByEmail(email)) return res.status(404).json({message: 'Email has been registered'});


        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await User.create({username, email, password: hashPassword});

        return res.status(201).json({message: 'Your account has been registered'});
        
        // if(checkEmail(email)){
        //     return res.status(404).json({message: 'Email has been registered'});
        // }else{
        //     sendEmail(email);
        // }

        // const salt = await bcrypt.genSalt();
        // const hashPassword = await bcrypt.hash(password, salt);

        // await User.create({username, email, password: hashPassword});

        // sendEmail(email);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const logout = (req, res) => {

};

const findUserByEmail = async (email) => {
    const user = await User.findOne({where: {email}});

    return user;
}

const findUserByUsername = async (username) => {
    const user = await User.findOne({where: {username: username.toLowerCase()}});

    return user;
}

const sendEmail = (mailOptions, email) => {
    transporter.sendMail(mailOptions, async (err, info) => {
        if (err) return res.status(400).json({message: `Failed to send OTP code to ${email}`});

        return res.status(200).json({message: `OTP code successfully sent to ${email}`});
    });
}

const checkEmail = async(email) => {
    const user = findUserByEmail(email);

    return user && user.isVerified || !user.isVerified;
}

module.exports = {login, register, logout};