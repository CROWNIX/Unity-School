const {School, Activity, Facility, Achievment} = require('../models');
const {Op} = require('sequelize');

const getAllSchools = async (req, res) => {
    const {search} = req.query;

    try {
        if(search){
            const schools = await School.findAll({
                where: {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                }
            });

            if (schools.length) return res.status(200).json({schools});

            return res.status(404).json({message: 'Sekolah tidak ditemukan'});
        }

        const schools = await School.findAll();

        if (schools.length) return res.status(200).json({schools});

        return res.status(404).json({message: 'Sekolah tidak ditemukan'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const getSchoolById = async (req, res) => {
    const {schoolId} = req.params;

    try {
        const school = await School.findByPk(schoolId, {
            include: [
                {
                    model: Activity,
                    as: 'activities',
                },
                {
                    model: Facility,
                    as: 'facilities',
                },
                {
                    model: Achievment,
                    as: 'achievments',
                },
            ],
        });

        if (school) return res.status(200).json({school});

        return res.status(404).json({message: 'Sekolah tidak ditemukan'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

module.exports = {getAllSchools, getSchoolById};