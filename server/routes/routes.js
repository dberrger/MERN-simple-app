var express = require('express');
var router = express.Router();


router.post('/authenticate', function(req, res){
    console.log('Authenticate');
    res.send('Authenticate response ! ')
});


router.post('/authenticate', function(req, res){
    console.log('Authenticate');
    res.send('Authenticate response ! ')
});

router.get('/history', function(req, res){
    console.log('history');
    res.send('history response ! ')
});

router.post('/register', function(req, res){
    console.log('register');
    res.send('register response ! ')
});

router.get('/profile', function(req, res){
    
   
    res.send('profile response ! ')
});

router.post('/add', function(req, res){
    console.log(req.body);
    console.log('add');
    res.send('add response ! '+ req.body)
});

router.post('/times', function(req, res){
    console.log('times');
    res.send('history response ! ')
});

router.delete('/delete', function(req, res){
    console.log('delete');
    res.send('DELETE response ! ')
});

 module.exports = router;