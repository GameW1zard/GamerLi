const router = require('express').Router();
const { Users, Consoles, Games } = require('../../models');

router.get ('/', async function (req,res){
    let resdata = await Users.findAll()
    .catch(function (err){
        res.json(err);
    });
    res.json(resdata);
});

router.get('/:id', async function (req,res){
    let resdata ={
        userdata: null,
        Consoles: [],
        games: []
    }
    let userdata = await Users.findOne({where: {id: req.params.id}})
    .catch(function (err){
        res.json(err);
    });
    resdata.userdata = userdata;

    let consolefind = await Consoles.findAll({where: {user_id: req.params.id}})
    for (let c = 0, len = consolefind.length; c < len; c++) {
        resdata.Consoles[c] = await Consoles.findOne({where: {id: consolefind[c].id}})
    }

    let gamefind = await Games.findAll({where: {user_id: req.params.id}})
    for (let g = 0, len = gamefind.length; g < len; g++) {
        resdata.games[g] = await Games.findOne({where: {id: gamefind[g].id}})
    }

    res.json(resdata);    
});

router.post('/', function (req,res){
    Users.create(req.body)
    .then(function (resdata){
        res.json(resdata);
    })
    .catch(function (err){
        res.json(err);
    });
})

module.exports = router;