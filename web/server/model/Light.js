import { config } from "../config";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lightSchema = new Schema({
    DeviceName: String,
    Mode: Number
});

const Light = mongoose.model(config.dbcollection,lightSchema);

export default Light;