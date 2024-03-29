import { config } from "./config";
const mlab_url = "mongodb://"+config.dbuser+":"+config.dbpassword+"@ds259351.mlab.com:59351/"+config.dbname;

export const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
export const mongoose_connection = () => {
    mongoose.connect(mlab_url, {useNewUrlParser: true});
    const mongoose_db = mongoose.connection;
    mongoose_db.on('error', console.error.bind(console, 'connection error:'));
    return mongoose_db;
}
