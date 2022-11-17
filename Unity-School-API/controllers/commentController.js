const createComment = async(req, res) => {
    const {schoolId, username, message} = req.body;

    try {

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}