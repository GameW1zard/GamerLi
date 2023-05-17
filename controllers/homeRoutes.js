const router = require('express').Router();
const { Users } = require('../models');
const withAuthorization = require('../utils/auth');

// Redirect to homepage if user is not logged in
router.get('/', withAuthorization, async (req, res) => {
    try {
        const userData = await Users.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const user = userData.map((model) => model.get({ plain: true }));

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
