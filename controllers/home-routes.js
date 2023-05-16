/* As the project progresses, we will add more models to the require statement */

const router = require('express').Router();
const { Users } = require('../models');

// Redirect to homepage if user is not logged in
router.get('/', async (req, res) => {
    try {
        const userData = await Users.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const {/* Add models here */ } = {/* Add models here */ }.map((model) => model.get({ plain: true }));

        res.render('homepage', {
            // Add attributes here
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one model
router.get('/model/:id', async (req, res) => {
    try {
        const {/* Add models here */ } = await {/* Add models here */ }.findByPk(req.params.id, {
            include: [
                {
                    model: {/* Add models here */ },
                    attributes: ['/* Add attributes here */'],
                },
            ],
        });
        const {/* Add models here */ } = {/* Add models here */ }.get({ plain: true });
        res.render('model', { model, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all models by a specific attribute
router.get('/model/attribute/:attribute', async (req, res) => {
    try {
        const {/* Add models here */ } = await {/* Add models here */ }.findAll({
            where: {
                // Add attributes here
            },
            include: [
                {
                    model: {/* Add models here */ },
                    attributes: ['/* Add attributes here */'],
                },
            ],
        });

        const {/* Add models here */ } = {/* Add models here */ }.map((model) => model.get({ plain: true }));

        res.render('model', {
            // Add attributes here
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all models from a specific category
router.get('/category/:category', async (req, res) => {
    try {
        const {/* Add models here */ } = await {/* Add models here */ }.findAll({
            where: {
                // Add attributes here
            },
            include: [
                {
                    model: {/* Add models here */ },
                    attributes: ['/* Add attributes here */'],
                },
            ],
        });

        const {/* Add models here */ } = {/* Add models here */ }.map((model) => model.get({ plain: true }));

        res.render('category', {
            // Add attributes here
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;