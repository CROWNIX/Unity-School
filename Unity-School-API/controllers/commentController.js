const {validationResult} = require('express-validator');
const {Comment} = require('../models');

const createComment = async(req, res) => {
    const {schoolId, username, message} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

    try {
        await Comment.create({schoolId, username, message});

        return res.status(201).json({message: 'Comment berhasil ditambahkan'});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = {createComment};