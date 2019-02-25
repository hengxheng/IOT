import Device from "../model/Device";
import { mongoose_connection } from "../db_connection";

export default class DeviceController{  
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
