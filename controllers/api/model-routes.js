const router = require('express').Router();
const { model } = require('../../models');

// CREATE new model
router.post('/', async (req, res) => {
    try {
        const modelData = await model.create({
            // Add attributes here
        });

        req.session.save(() => {
            req.session.logged_in = true;
            res.status(200).json(modelData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// UPDATE model
router.put('/:id', async (req, res) => {
    try {
        const modelData = await model.update(
            {
                // Add attributes here
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!modelData) {
            res.status(404).json({ message: 'No model found with this id!' });
            return;
        }

        res.status(200).json(modelData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE model
router.delete('/:id', async (req, res) => {
    try {
        const modelData = await model.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!modelData) {
            res.status(404).json({ message: 'No model found with this id!' });
            return;
        }

        res.status(200).json(modelData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Lgoin route
router.post('/login', async (req, res) => {
    try {
        const modelData = await model.findOne({
            where: {
                // Add attributes here
            },
        });

        if (!modelData) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await modelData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.logged_in = true;

            res
                .status(200)
                .json({ model: modelData, message: 'You are now logged in!' });
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