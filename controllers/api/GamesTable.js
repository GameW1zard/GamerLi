const router = require('express').Router();
const { Games } = require('../../models');

router.get ('/', async (req,res) => {
    try {
        const games = await Games.findAll();
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});



//get games by user
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const games = await Games.findAll({ where: { user_id: userId } });
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//get games by user and console
router.get('/:id/:console_id', async (req, res) => {
    try {
        const userId = req.params.id;
        const consoleId = req.params.console_id;
        const games = await Games.findAll({ where: { user_id: userId, console_id: consoleId } });
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


//create new game
router.post('/', async (req, res) => {
    try {
        const newGame = await Games.create(req.body);
        res.status(200).json(newGame);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//delete game
router.delete('/:id', async (req, res) => {
    try {
        const gameId = req.params.id;
        const deletedGame = await Games.destroy({ where: { id: gameId } });
        res.status(200).json(deletedGame);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;

//     Games.create(req.body)
//     .then(function (resdata){
//         res.json(resdata);
//     })
//     .catch(function (err){
//         res.json(err);
//     });
// })

//     let resdata = await Games.findAll({where: {user_id: req.params.id, console_id: req.params.console_id}})
//     .catch(function (err){
//         res.json(err);
//     });
//     res.json(resdata);
// });

//     let resdata = await Games.findAll({where: {user_id: req.params.id}})
//     .catch(function (err){
//         res.json(err);
//     });
//     res.json(resdata);
// });

//     let resdata = await Games.findAll()
//     .catch(function (err){
//         res.json(err);
//     });
//     res.json(resdata);
// });