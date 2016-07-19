var express 		= require("express"),
		bodyParser  = require("body-parser"),
		mongoose 		= require('./mongoose'),
		users	 			= require('./routes/users.js'),
		posts	 			= require('./routes/posts.js'),
		router 			= express.Router(),
		app 				= express();

mongoose.connect();

// app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(__dirname + '/..'));

app.listen(8181, () => console.log('Listening on port 8181.'));

app.use('/user', users);
app.use('/posts', posts);
