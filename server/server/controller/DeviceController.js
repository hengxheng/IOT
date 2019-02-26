const Device = require('../model/Device');
const mongoose_connection = require('../db_connection');

class DeviceController{  
    constructor(){
        mongoose_connection();
    }

    getAllDevices(req, res){
        res.setHeader('Content-Type', 'application/json');
        Device.find({}, (err, data) => {
            if (err) throw err;
            res.json({
                data: data
            });
        });
    }

    getDevicesByName(name, res){
        res.setHeader('Content-Type', 'application/json');
        Device.findOne({ DeviceName: name }, (err, data) => {
            if (err) throw err;
            res.json({
                data: data
            });
        });
    }
}
module.exports = DeviceController;