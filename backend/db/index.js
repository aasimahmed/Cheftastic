var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/Cheftastic');

mongoose.Promise = Promise;