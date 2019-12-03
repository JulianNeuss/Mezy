const express = require('express');
const router = express.Router();
module.exports = router;
const mongoose= require('mongoose');
const Uni = require('../models/uni');
const Country = require('../models/country');
const Carreer = require('../models/carreer');
const Course = require('../models/course');

// devuelve en json las materias correlativas que hay con una universidad 
router.get('/course/uni/:id_uni/:id_carreer', function(req,res){
    const uni = parseInt(req.params.id_uni,10);
    const carreer = parseInt(req.params.id_carreer,10);
    Course.find({ "uni_id" : uni, "carrer_id" : carreer}, function(err, unis) { 
        if(err) {
            res.send("Se rompio todo.");
            next();
        }
        res.json(unis);
    });
});


// univesidades de un pais.
router.get('/uni/:id_country', function(req,res) {
    const country = parseInt(req.params.id_country,10);
    Uni.find({ "country_id": country}, function(err, unis) { 
        if(err) {
            res.send("Se rompio todo.");
            next();
        }
        res.json(unis);
    });
});

router.get('/countries.json', function(req,res){
    Country.find({}, function(err, country) { 
        if(err) {
            res.send("Se rompio todo.");
            next();
        }
        res.json(country);
    });
});
