const config = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lightSchema = new Schema({
    DeviceName: String,
    Mode: Number
});

const Light = mongoose.model(config.dbcollection,lightSchema);

module.export = Light;