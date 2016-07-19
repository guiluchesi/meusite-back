var express 	= require("express"),
		mongoose  = require('../mongoose'),
		_posts  	= require('../models/posts.js'),
		router 		= express.Router();

router.route('/')
.get((req, res) => {
	_posts.find((err, posts) => {
		if(err) return res.status(400).send(err);
		posts.length === 0 ? res.status(400).send("Nenhuma section com esse título encontrado.") : res.status(200).json(posts);
	});
})
.post((req, res) => {
	var post = req.body,
			newPost = new _posts(post);

	newPost.save((err) => {
	  if (err) return res.status(400).send(err);
		res.status(200).send("Post cadastrado com sucesso.");
	});
});

router.route('/:slug')
.get((req, res) => {
	var slug = req.params;

	_posts.find(slug, (err, post) => {
		if (err) return res.status(400).send(err);
		post.length === 0 ? res.status(400).send("Nenhuma section com esse título encontrado.") : res.status(200).json(post[0]);
	})
})
.delete((req, res) => {
	var slug = req.params;

	_posts.remove(slug, (err, post) => {
		if (err) return res.status(400).send(err);
		post.result.n === 0 ? res.status(400).send("Nenhum post com esse título encontrado.") : res.status(200).send("Post deletado com sucesso.");
	})
});

module.exports = router;
