import { config } from "../config";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DeviceSchema = new Schema({
    DeviceName: String,
    Mode: Number
});

const Device = mongoose.model(config.dbcollection, DeviceSchema);

export default Device;