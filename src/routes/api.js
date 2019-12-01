const express = require('express');
const router = express.Router();
module.exports = router;
const mongoose= require('mongoose');
const Uni = require('../models/uni');
const Country = require('../models/country');

// devuelve en json las materias correlativas que hay con una universidad 
router.get('/course/uni/:id', function(req,res){
   
});

// devuelve info de una materia
router.get('/course/:id', function(req,res){

});

// crear nueva materia
router.post('/course', function(req,res){

});

// modificar info de una materia
router.put('/course/:id', function(req,res) {

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

router.get('/countries', function(req,res){
    Country.find({}, function(err, country) { 
        if(err) {
            res.send("Se rompio todo.");
            next();
        }
        res.json(country);
    });
});
