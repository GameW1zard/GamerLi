const router = require('express').Router();
const { Consoles } = require('../../models');

router.get ('/', async (req,res) => {
    try {
        const consoles = await Consoles.findAll();
        res.status(200).json(consoles);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/:id/:game_id', async (req, res) => {
    try {
        const userId = req.params.id;
        const gameId = req.params.game_id;
        const consoles = await Consoles.findAll({ where: { user_id: userId, game_id: gameId } });
        res.status(200).json(consoles);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});



router.post('/', async  (req, res) => {
    try {
        const newConsole = await Consoles.create(req.body);
        res.status(200).json(newConsole);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const consoleId = req.params.id;
        const deletedConsole = await Consoles.destroy({ where: { id: consoleId } });
        res.status(200).json(deletedConsole);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;

//     let resdata = await Consoles.findAll()
//     .catch(function (err){
//         res.json(err);
//     });
//     res.json(resdata);
// });

//     let resdata = await Consoles.findAll({where: {user_id: req.params.id}})
//     .catch(function (err){
//         res.json(err);
//     });
//     res.json(resdata);
// });

//     Consoles.create(req.body)
//     .then(function (resdata){
//         res.json(resdata);
//     })
//     .catch(function (err){
//         res.json(err);
//     });
// });
