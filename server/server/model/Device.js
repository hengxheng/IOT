const config = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DeviceSchema = new Schema({
    DeviceName: String,
    Mode: Number
});

const Device = mongoose.model('device', DeviceSchema);

module.export = Device;