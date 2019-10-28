const express = require('express');
const router = express.Router();

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

// univesidades de un pais y una carrera.
router.get('/uni/:id_country/:id_career', function(req,res) {

});

