const router = require('express').Router();
const { isAuth } = require('../middlewares/authMidleware.js');

router.get('/', (req, res) => {
    res.render('home');
});


module.exports = router;