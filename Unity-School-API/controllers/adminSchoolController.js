const path = require('path');
const {School, Activity, Facility, Achievment} = require('../models');
const fs = require('fs');

const getAllSchools = async (req, res) => {
    try {
        const schools = await School.findAll({
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

const createSchool = async (req, res) => {
    const {name, description, address, email, noTelp, activityName, achievmentName, achievmentLevel, facilityName, facilityTotal} = req.body;

    try {
        const {logo, schoolImage, activities, achievments, facilities} = req.files;

        const uploadLogo = validateImage(logo, 'images/schools/logo', req, res);

        if (uploadLogo.error) {
            return res.status(uploadLogo.error.code).json({message: uploadLogo.error.message});
        }

        const uploadSchoolImage = validateImage(schoolImage, 'images/schools/images', req, res);

        if (uploadSchoolImage.error) {
            return res.status(uploadSchoolImage.error.code).json({message: uploadSchoolImage.error.message});
        }

        if (activities?.length) {
            activities.forEach((activity) => {
                let uploadActivities = validateImage(activity, 'images/schools/activities', req, res);

                if (uploadActivities.error) {
                    return res.status(uploadActivities.error.code).json({message: uploadActivities.error.message});
                }
            });
        }

        if (facilities?.length) {
            facilities.forEach((facility) => {
                let uploadFacility = validateImage(facility, 'images/schools/facilities', req, res);

                if (uploadFacility.error) {
                    return res.status(uploadFacility.error.code).json({message: uploadFacility.error.message});
                }
            });
        }

        if (achievments?.length) {
            achievments.forEach((achievment) => {
                let uploadAchievments = validateImage(achievment, 'images/schools/achievments', req, res);

                if (uploadAchievments.error) {
                    return res.status(uploadAchievments.error.code).json({message: uploadAchievments.error.message});
                }
            });
        }

        //? Move image to public
        moveImageToPublic(logo, `./public/images/schools/logo/${uploadLogo.imageFileName}`);
        moveImageToPublic(schoolImage, `./public/images/schools/images/${uploadSchoolImage.imageFileName}`);

        const school = await School.create({name, description, address, logo: uploadLogo.imageFileName, logoUrl: uploadLogo.imageUrl, email, image: uploadSchoolImage.imageFileName, imageUrl: uploadSchoolImage.imageUrl, noTelp});

        if (activities?.length) {
            activities.forEach(async (activity, index) => {
                let imageFileName = Date.now() + '_' + activity.name;
                let imageUrl = `${req.protocol}://${req.get('host')}/images/schools/activities/${imageFileName}`;

                moveImageToPublic(activity, `./public/images/schools/activities/${imageFileName}`);

                await Activity.create({schoolId: school.id, name: activityName[index], image: imageFileName, imageUrl});
            });
        }

        if (facilities?.length) {
            facilities.forEach(async (facility, index) => {
                let imageFileName = Date.now() + '_' + facility.name;
                let imageUrl = `${req.protocol}://${req.get('host')}/images/schools/activities/${imageFileName}`;

                moveImageToPublic(facility, `./public/images/schools/facilities/${imageFileName}`);

                await Facility.create({schoolId: school.id, name: facilityName[index], total: facilityTotal[index], image: imageFileName, imageUrl});
            });
        }

        if (achievments?.length) {
            achievments.forEach(async (achievment, index) => {
                let imageFileName = Date.now() + '_' + achievment.name;
                let imageUrl = `${req.protocol}://${req.get('host')}/images/schools/activities/${imageFileName}`;

                moveImageToPublic(achievment, `./public/images/schools/achievments/${imageFileName}`);

                await Achievment.create({schoolId: school.id, name: achievmentName[index], level: achievmentLevel[index], image: imageFileName, imageUrl});
            });
        }

        return res.status(200).json({message: 'Sekolah berhasil ditambahkan'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const updateSchool = async (req, res) => {
    const {name, description, address, email, noTelp, activityName, achievmentName, achievmentLevel, facilityName, facilityTotal, oldLogo, oldSchoolImage, oldActivityImage, oldAchievmentImage, oldFacilityImage} = req.body;
    const {schoolId} = req.params;

    try {
        const {logo, schoolImage, activities, achievments, facilities} = req.files;

        if (logo) {
            const updateLogo = validateImage(logo, 'images/schools/logo', req, res);

            if (updateLogo.error) {
                return res.status(updateLogo.error.code).json({message: updateLogo.error.message});
            }

            if (oldLogo !== 'default.jpg') {
                fs.unlinkSync(`public/images/schools/logo/${oldLogo}`);
            }

            moveImageToPublic(logo, `./public/images/schools/logo/${updateLogo.imageFileName}`);

            await School.update(
                {
                    logo: updateLogo.imageFileName,
                    logoUrl: updateLogo.imageUrl,
                },
                {where: {id: schoolId}}
            );
        }

        if (oldSchoolImage) {
            const updateSchoolImage = validateImage(schoolImage, 'images/schools/images', req, res);

            if (updateSchoolImage.error) {
                return res.status(updateSchoolImage.error.code).json({message: updateSchoolImage.error.message});
            }

            if (oldSchoolImage !== 'default.jpg') {
                fs.unlinkSync(`public/images/schools/images/${oldSchoolImage}`);
            }

            moveImageToPublic(schoolImage, `./public/images/schools/images/${updateSchoolImage.imageFileName}`);

            await School.update(
                {
                    image: updateSchoolImage.imageFileName,
                    imageUrl: updateSchoolImage.imageUrl,
                },
                {where: {id: schoolId}}
            );
        }

        if (activities?.length) {
            activities.forEach((activity) => {
                let uploadActivities = validateImage(activity, 'images/schools/activities', req, res);

                if (uploadActivities.error) {
                    return res.status(uploadActivities.error.code).json({message: uploadActivities.error.message});
                }
            });

            oldActivityImage.forEach((oldImage) => {
                fs.unlinkSync(`public/images/schools/activities/${oldImage}`);
            });
        }

        if (facilities?.length) {
            facilities.forEach((facility) => {
                let uploadFacility = validateImage(facility, 'images/schools/facilities', req, res);

                if (uploadFacility.error) {
                    return res.status(uploadFacility.error.code).json({message: uploadFacility.error.message});
                }
            });

            oldFacilityImage.forEach((oldImage) => {
                fs.unlinkSync(`public/images/schools/facilities/${oldImage}`);
            });
        }

        if (achievments?.length) {
            achievments.forEach((achievment) => {
                let uploadAchievments = validateImage(achievment, 'images/schools/achievments', req, res);

                if (uploadAchievments.error) {
                    return res.status(uploadAchievments.error.code).json({message: uploadAchievments.error.message});
                }
            });

            oldAchievmentImage.forEach((oldImage) => {
                fs.unlinkSync(`public/images/schools/achievments/${oldImage}`);
            });
        }

        //? Move image to public
        const school = await School.update(
            {
                name,
                description,
                address,
                email,
                noTelp,
            },
            {where: {id: schoolId}}
        );

        if (activities?.length) {
            await Activity.destroy({
                where: {
                    schoolId,
                },
            });
            activities.forEach(async (activity, index) => {
                let imageFileName = Date.now() + '_' + activity.name;
                let imageUrl = `${req.protocol}://${req.get('host')}/images/schools/activities/${imageFileName}`;

                moveImageToPublic(activity, `./public/images/schools/activities/${imageFileName}`);

                await Activity.create({schoolId, name: activityName[index], image: imageFileName, imageUrl});
            });
        }

        if (facilities?.length) {
            await Facility.destroy({
                where: {
                    schoolId,
                },
            });
            facilities.forEach(async (facility, index) => {
                let imageFileName = Date.now() + '_' + facility.name;
                let imageUrl = `${req.protocol}://${req.get('host')}/images/schools/activities/${imageFileName}`;

                moveImageToPublic(facility, `./public/images/schools/facilities/${imageFileName}`);

                await Facility.create({schoolId, name: facilityName[index], total: facilityTotal[index], image: imageFileName, imageUrl});
            });
        }

        if (achievments?.length) {
            await Achievment.destroy({
                where: {
                    schoolId,
                },
            });
            achievments.forEach(async (achievment, index) => {
                let imageFileName = Date.now() + '_' + achievment.name;
                let imageUrl = `${req.protocol}://${req.get('host')}/images/schools/activities/${imageFileName}`;

                moveImageToPublic(achievment, `./public/images/schools/achievments/${imageFileName}`);

                await Achievment.create({schoolId, name: achievmentName[index], level: achievmentLevel[index], image: imageFileName, imageUrl});
            });
        }

        return res.status(200).json({message: 'Sekolah berhasil diupdate'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const deleteSchool = async (req, res) => {
    const {schoolId} = req.params;

    try {
        const school = await School.findByPk(schoolId);

        if (school) {
            fs.unlinkSync(`public/images/schools/logo/${school.logo}`);
            fs.unlinkSync(`public/images/schools/images/${school.image}`);
        }

        await School.destroy({
            where: {
                id: schoolId,
            },
        });

        const activityImages = await Activity.findAll({where: {schoolId}});
        const facilityImages = await Facility.findAll({where: {schoolId}});
        const achievmentImages = await Achievment.findAll({where: {schoolId}});

        if (activityImages.length) {
            activityImages.forEach((activityImage) => {
                fs.unlinkSync(`public/images/schools/activities/${activityImage.image}`);
            });

            await Activity.destroy({
                where: {
                    id: schoolId,
                },
            });
        }

        if (facilityImages.length) {
            facilityImages.forEach((facilityImage) => {
                fs.unlinkSync(`public/images/schools/facilities/${facilityImage.image}`);
            });

            await Facility.destroy({
                where: {
                    id: schoolId,
                },
            });
        }

        if (achievmentImages.length) {
            achievmentImages.forEach((achievment) => {
                fs.unlinkSync(`public/images/schools/achievments/${achievment.image}`);
            });

            await Achievment.destroy({
                where: {
                    id: schoolId,
                },
            });
        }

        return res.status(200).json({message: 'Sekolah berhasil dihapus'});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

const validateImage = (files, url, req, res) => {
    if (!files) {
        return {imageFileName: null, imageUrl: null};
    }

    const allowedType = ['.png', '.jpg', '.jpeg'];
    const image = files;
    const imageSize = image.data.length;
    const imageExtension = path.extname(image.name);
    const imageFileName = Date.now() + '_' + image.name;
    const imageUrl = `${req.protocol}://${req.get('host')}/${url}/${imageFileName}`;

    if (!allowedType.includes(imageExtension.toLocaleLowerCase())) return {error: {code: 400, message: 'Gambar harus berekstensi .jpg, .png, .jpeg'}};

    if (imageSize > 5000000) return {error: {code: 400, message: 'Gambar tidak boleh lebih dari 5 mb'}};

    return {imageFileName, imageUrl};
};

const moveImageToPublic = (image, url) => {
    image.mv(url, async (error) => {
        if (error) return error.message;
    });
};

module.exports = {getAllSchools, getSchoolById, createSchool, updateSchool, deleteSchool};
