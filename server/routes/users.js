var express 	= require("express"),
		mongoUtil = require('../mongoose'),
    _user	 		= require('../models/users.js'),
		router 		= express.Router();

router.route('/')
.post((req, res) => {
	var user = req.body,
			newUser = new _user(user);

	newUser.save((err) => {
	  if (err) return res.status(400).send(err);
		res.status(200).send("Usuário cadastrado com sucesso.");
	});
});

router.route('/login')
.post((req, res) => {
    var user = req.body,
        query = {'user': user.user, 'pw': user.pw};

    _user.findOne(query, (err, user0) => {
      if (err) return res.status(400).send(err);
			if (!user0) return res.status(400).send('Usuário ou senha incorreto.');
			usuario = user0.toObject();
			delete usuario.pw;
			res.status(200).send(usuario);
    });

});

module.exports = router;
