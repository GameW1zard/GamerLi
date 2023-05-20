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

// router.get ('/', async function (req,res){
//     let resdata = await Users.findAll()
//     .catch(function (err){
//         res.json(err);
//     });
//     res.json(resdata);
// });

// router.get('/:id', async function (req,res){
//     let resdata ={
//         userdata: null,
//         consoles: [],
//         games: []
//     }
//     let userdata = await Users.findOne({where: {id: req.params.id}})
//     .catch(function (err){
//         res.json(err);
//     });
//     resdata.userdata = userdata;

//     let consolefind = await Consoles.findAll({where: {user_id: req.params.id}})
//     for (let c = 0, len = consolefind.length; c < len; c++) {
//         resdata.consoles[c] = await Consoles.findOne({where: {id: consolefind[c].id}})
//     }

//     let gamefind = await Games.findAll({where: {user_id: req.params.id}})
//     for (let g = 0, len = gamefind.length; g < len; g++) {
//         resdata.games[g] = await Games.findOne({where: {id: gamefind[g].id}})
//     }

//     res.json(resdata);
// });

// router.post('/', async function (req,res){
//     Users.create(req.body)
//     .then(function (resdata){
//         res.json(resdata);
//     })
//     .catch(function (err){
//         res.json(err);
//     });
// })
