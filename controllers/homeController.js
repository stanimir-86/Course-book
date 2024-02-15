const router = require('express').Router();
const courseService = require('../Services/courseService.js');

router.get('/', async (req, res) => {

    const latestCourses = await courseService.getLatest().lean();
    res.render('home', { latestCourses });
});


module.exports = router;