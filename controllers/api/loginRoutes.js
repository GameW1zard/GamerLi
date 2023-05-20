const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await Users.findOne({ where: { user_name: req.body.user_name } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username and/or password!' });
            return;
        }

        const validpassword = await userData.checkPassword(req.body.password);

        if (!validpassword) {
        res
            .status(400)
            .json({ message: 'Incorrect username and/or password!' });
            return;
        }

        // Requests session object to save user data to cookie
        req.session.save(() => {
            req.session.user_name = userData.user_name;
            req.session.logged_in = true;
            console.log('login sucsesful', req.session)
            res.render('myLibrary', {logged_in: req.session.logged_in, user_name: req.session.user_name})
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;
