var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

// Individual posts
router.get('/:id', (req,res,next) => {
	var posts = db.get('posts');
    posts.findById(req.params.id, function(err, post) {
		res.render('show', {
			"post": post
		}); 
	});
});

// Posts index
router.get('/', function(req, res, next) {
  	var posts = db.get('posts');
 	posts.find({},{},function(err, posts){
  	res.render('all', {
  		'posts': posts
  	});
  });
});

module.exports = router;