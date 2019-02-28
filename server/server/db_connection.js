const config = require('./config');
const mongoose = require('mongoose');
// const mlab_url = "mongodb://"+config.dbuser+":"+config.dbpassword+"@"+config.dbhost+"/"+config.dbname; //mongodb://example:password@mongo:27017/api
const mlab_url = "mongodb://database:27017/device";
console.log(mlab_url);
mongoose.Promise = global.Promise;
const mongoose_connection = () => {
    mongoose.connect(mlab_url, {useNewUrlParser: true});
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    return mongoose.connection;
}
module.exports = mongoose_connection;