const courseService = require('../Services/courseService.js')

async function isCourseOwner(req, res, next) {

    const course = await courseService.getOne(req.params.courseId).lean()
    res.render('courses/edit', { ...course });

    if (course.owner != req.user?._id) {
        return res.redirect(`/courses/${req.params.courseId}/details`);
    }


    next();
};

exports.isCourseOwner = isCourseOwner;