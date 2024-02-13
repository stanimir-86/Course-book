const router = require('express').Router();
const { isAuth } = require('../middlewares/authMidleware.js');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/authorize-test', isAuth, (req, res) => {
    res.send('You are auth');
})

module.exports = router;