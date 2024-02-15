const Course = require("../models/Course.js");
const User = require('../models/User.js');

exports.getAll = () => Course.find();
exports.getOne = (courseId) => Course.findById(courseId)
exports.create = async (userId, courseData) => {


    const createdCourse = await Course.create({
        owner: userId,
        ...courseData,
    });
    await User.findByIdAndUpdate(userId, { $push: { createdCourses: createdCourse._id } });
    return createdCourse;
}
