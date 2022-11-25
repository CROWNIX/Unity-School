const {Comment} = require('../models');

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();

        if (comments.length) return res.status(200).json({comments});

        return res.status(404).json({message: 'Comment tidak ditemukan'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const getCommentById = async (req, res) => {
    const {commentId} = req.params;

    try {
        const comment = await Comment.findByPk(commentId);

        if (comment) return res.status(200).json({comment});

        return res.status(404).json({message: 'Comment tidak ditemukan'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const createComment = async (req, res) => {};

const updateComment = async (req, res) => {
    const {commentId} = req.params;
    const {schoolId, username, message} = req.body;

    try {
        await Comment.update(
            {schoolId, username, message},
            {
                where: {
                    id: commentId,
                },
            }
        );

        return res.status(200).json({message: 'Comment berhasil diupdate'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const deleteComment = async (req, res) => {
    const {commentId} = req.params;

    try {
        await Comment.destroy({
            where: {
                id: commentId,
            },
        });

        return res.status(200).json({message: 'Comment berhasil dihapus'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

module.exports = {getAllComments, getCommentById, createComment, updateComment, deleteComment};
