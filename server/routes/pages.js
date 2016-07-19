var express = require("express"),
	mongoUtil = require('../mongoUtil'),
	router = express.Router(),
	app = express();

router.route('/')
.get((req, res) => {
	var home = mongoUtil.home(),
		page = req.params.page;

	home.find({}).toArray((err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.length === 0){
			res.status(400).send("Nenhuma section com esse título encontrado.");
		} else {
			res.status(200).json(data);
		}
	});
})
.post((req, res) => {
	var home = mongoUtil.home(),
		newSection = req.body;

	home.insert(newSection, (err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.result.n === 0){
			res.status(400).send("Nenhuma section com esse título encontrado.");
		} else {
			res.status(200).send("Section adicionada com sucesso.");
		}
	});
});

router.route('/:section')
.get((req, res) => {
	var home = mongoUtil.home(),
		slug = req.params.section,
		query = {"slug": slug};

	home.find(query).toArray((err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.length === 0){
			res.status(400).send("Nenhuma section com esse título encontrado.");
		} else {
			res.status(200).json(data[0]);
		}
	});
})
.delete((req, res) => {
	var home = mongoUtil.home(),
		section = req.params.section,
		query = {"section": section};

	home.remove(query, (err, data) => {
		if(err){
			res.status(400).send(err);
		} else if(data.result.n === 0){
			res.status(400).send("Nenhuma section com esse título encontrado.");
		} else {
			res.status(200).send("Section deletada com sucesso.");
		}
	})
})
.put((req, res) => {
	var home = mongoUtil.home(),
		slug = req.params.section,
		newSection = req.body,
		updt = {$set: newSection}
		query = {"slug": slug};

	home.update(query, updt, (err, data) => {
		if(err){
			console.log(err)
			res.status(400).send(err);
		} else if(data.result.n === 0){
			res.status(400).send("Nenhuma section com esse título encontrado.");
		} else {
			res.status(200).send("Post alterado com sucesso.");
		}
	});
});

module.exports = router;
