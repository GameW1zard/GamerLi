const router = require('express').Router();
const { Games } = require('../models');

// Redirect to homepage if user is not logged in
router.get('/', async (req, res) => {
    try {
        const gamesData = await Games.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const { /* Add models here */ } = { /* Add models here */ }.map((model) => model.get({ plain: true }));

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
        const { /* Add models here */ } = await { /* Add models here */ }.findByPk(req.params.id, {
            include: [
                {
                    model: { /* Add models here */ },
                    attributes: ['/* Add attributes here */'],
                },
            ],
        });
        const { /* Add models here */ } = { /* Add models here */ }.get({ plain: true });
        res.render('model', { model, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all models by a specific attribute
router.get('/model/attribute/:attribute', async (req, res) => {
    try {
        const { /* Add models here */ } = await { /* Add models here */ }.findAll({
            where: {
                // Add attributes here
            },
            include: [
                {
                    model: { /* Add models here */ },
                    attributes: ['/* Add attributes here */'],
                },
            ],
        });

        const { /* Add models here */ } = { /* Add models here */ }.map((model) => model.get({ plain: true }));

        res.render('model', {
            // Add attributes here
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});