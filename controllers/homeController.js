const router = require('express').Router();
const courseService = require('../Services/courseService.js');
const userService = require('../Services/userService.js');
const { isAuth } = require('../middlewares/authMidleware.js')
router.get('/', async (req, res) => {

    const latestCourses = await courseService.getLatest().lean();
    res.render('home', { latestCourses });
});
router.get('/profile', isAuth, async (req, res) => {
    const user = await userService.getInfo(req.user._id).lean();
    const createdCoursesCount = user.createdCourses.length;
    const signeUpCoursesCount = user.signeUpCourses.length;

    res.render('profile', { user, createdCoursesCount, signeUpCoursesCount });
})

module.exports = router;