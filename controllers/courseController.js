const router = require('express').Router();

const { getErrorMessage } = require('../utils/errorUtils.js');
const courseService = require('../Services/courseService.js');
const { isAuth } = require('../middlewares/authMidleware.js');

router.get('/', isAuth, (req, res) => {
    
    res.render('courses/catalog');

});

router.get('/create', isAuth, (req, res) => {
    res.render('courses/create');

});
router.post('/create', isAuth, async (req, res) => {
    const courseData = req.body;
    try {
        await courseService.create(req.user._id, courseData)
        res.redirect('/courses');
    } catch (err) {
        res.render('courses/create', { ...courseData, error: getErrorMessage(err) });
    }

});


module.exports = router;