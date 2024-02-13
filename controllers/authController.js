const router = require('express').Router();

const authService = require('../Services/authService');
const { getErrorMessage } = require('../utils/errorUtils.js');

router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);

        res.cookie('auth', token);
        res.redirect('/');

    } catch (error) {
        res.render('auth/register', { error: error.message })
    }

});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const loginData = req.body;
    try {
        const token = await authService.login(loginData);

        res.cookie('auth', token);
        res.redirect('/');//да сложа на коя страница да редиректна по задание след успешен логин

    } catch (error) {
        res.render('auth/login', { error: getErrorMessage(error) })
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;