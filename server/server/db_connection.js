const config = require('./config');
const mlab_url = "mongodb://"+config.dbuser+":"+config.dbpassword+"@"+config.db+config.dbname;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoose_connection = () => {
    mongoose.connect(mlab_url, {useNewUrlParser: true});
    const mongoose_db = mongoose.connection;
    mongoose_db.on('error', console.error.bind(console, 'connection error:'));
    return mongoose_db;
}
module.exports = mongoose_connection;