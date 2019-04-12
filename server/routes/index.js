var express = require('express');
var router = express.Router();
var Movie = require("../models/MovieSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/listing', function (req, res, next) {
    Movie.find({}, (error, results) => {
        if (error)
            res.send(error);
        else
            res.send(results);
    })
});

router.post('/add', (req, res) => {
    Movie.create({
        movie_name: req.body.movie_name,
        genre: req.body.genre
    }, (error, results) => {
        if (error)
            res.send(error);
        else
            res.send("Added!");
    })
});

router.put('/edit/:id', (req, res)=>{
    Movie.findByIdAndUpdate({_id: req.params.id},req.body, (error, results)=>{
        if(error)
            res.send(error);
        else
            res.send("Updated!");
    })
});


module.exports = router;
