const router = require('express').Router();
const { Users, Consoles, Games } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await Users.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const consoles = await Consoles.findAll({ where: { user_id: userId } });
        const games = await Games.findAll({ where: { user_id: userId } });

        res.status(200).json({ user, consoles, games });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user data' });
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
        console.log(err);
    }
});

module.exports = router;
