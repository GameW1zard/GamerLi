const router = require('express').Router();
const { Users, Consoles } = require('../../models');

router.get ('/', async function (req,res){
    let resdata = await Consoles.findAll()
    .catch(function (err){
        res.json(err);
    });
    res.json(resdata);
});

//get consoles by user

router.get ('/:id', async function (req,res){
    let resdata = await Consoles.findAll({where: {user_id: req.params.id}})
    .catch(function (err){
        res.json(err);
    });
    res.json(resdata);
});

//create new console

router.post('/', function (req,res){
    Consoles.create(req.body)
    .then(function (resdata){
        res.json(resdata);
    })
    .catch(function (err){
        res.json(err);
    });
});

module.exports = router;