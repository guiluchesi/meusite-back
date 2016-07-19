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

    _user.find(query, (err, users) => {
      if (err) return res.status(400).send(err);
      users.length === 0 ? res.status(400).send('Usuário ou senha incorreto.') : res.status(200).send(users[0]);
    });

});

module.exports = router;
