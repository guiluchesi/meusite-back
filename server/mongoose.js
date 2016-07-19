var mongoose = require('mongoose'),
		db = mongoose.connection;
mongoose.connect('mongodb://localhost/meusite');

module.exports = {
	connect() {
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
			return console.log('Conectado ao banco com sucesso.');
		});
	}
}
