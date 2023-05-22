const router = require('express').Router();
const { Users, Consoles, Games } = require('../../models');
//const session = require('express-session');

router.get ('/', async function (req,res){
    let resdata = await Games.findAll()
    .catch(function (err){
        res.json(err);
    });
    res.json(resdata);
});

//get games by user

router.get ('/:id', async function (req,res){
   // console.log (req.params.id)
    let resdata = await Games.findAll({where: {user_id: req.params.id}})
    .catch(function (err){
        res.json(err);
    });
    res.json(resdata);
});

//get games by user and console

router.get ('/:id/:console_id', async function (req,res){
    let resdata = await Games.findAll({where: {user_id: req.params.id, console_id: req.params.console_id}})
    .catch(function (err){
        res.json(err);
    });
    res.json(resdata);
});

//create new game

router.post('/', function (req,res){
    Games.create(req.body)
    .then(function (resdata){
        res.json(resdata);
    })
    .catch(function (err){
        res.json(err);
    });
})
module.exports = router;