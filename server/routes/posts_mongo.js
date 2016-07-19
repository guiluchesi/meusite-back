var express 	= require("express"),
		mongoUtil = require('../mongoUtil'),
		posts 		= mongoUtil.posts(),
		router 		= express.Router(),
		app 			= express();

router.route('/')
.get((req, res) => {
	posts.find().toArray((err, data) => {
		err ? res.status(400).send(err) : data.length === 0 ? res.status(400).send("Nenhum post criado ainda.") :	res.status(200).json(data);
	});
})
.post((req, res) => {
	var posts = mongoUtil.posts(),
		newPost = req.body;

	posts.insert(newPost, (err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.result.n === 0){
			res.status(400).send("Nenhum post com esse título encontrado.");
		} else {
			res.status(200).send("Post adicionado com sucesso.");
		}
	});
});

router.route('/:slug')
.get((req, res) => {
	var posts = mongoUtil.posts(),
		post = req.params.slug,
		query = {"slug": post};

	posts.find(query).toArray((err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.length === 0){
			res.status(400).send("Nenhum post com esse título encontrado.");
		} else {
			res.status(200).json(data[0]);
		}
	});
})
.delete((req, res) => {
	var posts = mongoUtil.posts(),
		post = req.params.slug,
		query = {"slug": post};

	posts.remove(query, (err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.result.n === 0){
			res.status(400).send("Nenhum post com esse título encontrado.");
		} else {
			res.status(200).send("Post deletado com sucesso.");
		}
	})
})
.put((req, res) => {
	var posts = mongoUtil.posts(),
		newPost = req.body,
		post = req.params.slug,
		query = {"slug": post};

	posts.update(query, newPost,(err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.result.n === 0){
			res.status(400).send("Nenhum post com esse título encontrado.");
		} else {
			res.status(200).send("Post alterado com sucesso.");
		}
	});
});

module.exports = router;
