const express = require('express');

const router = express.Router();

router.get('/',function (req,res){


    res.render('home');


});

router.get('/make-donation', function(req,res){

    res.render('donation-form');

});


module.exports= router;