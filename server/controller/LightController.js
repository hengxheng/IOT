import Light from "../model/Device";
import { db_connection, mongoose_connection, mongoose } from "../db_connection";

export default class LightController{
    constructor(){
        mongoose_connection();
    }

    createLight(){
        Light.find({ DeviceName: "LED"}, (err, light) => {
            if (err) throw err;
            
            if(light.length == 0 ){
                const lightData = {
                    DeviceName: "LED",
                    Mode: 0
                };
                const light = new Light(lightData);

                light.save((err) => {
                    if (err) throw err;
                    console.log('LED created successfully!');
                });
            }
        });
    }

    getMode(req, res){
        res.setHeader('Content-Type', 'application/json');
        Light.find({ DeviceName: "LED"}, (err, light) => {
            if (err) throw err;
            if(light.length > 0 ){
                res.json({
                    error: false,
                    Mode: light[0].Mode
                });
            }
            else{
                res.json({error: true});
            }
        });
    }

    setMode(req, res){
        const data = req.params.mode;
        res.setHeader('Content-Type', 'application/json');

        Light.find({ DeviceName: "LED"}, (err, light) => {
            if (err) throw err;
            if(light.length > 0 ){
                light[0].Mode = data;
                light[0].save((err) => {
                    if (err) throw err;
                    res.json({
                        error: false,
                        Mode: light[0].Mode
                    });
                });
            }
            else{
                res.json({error: true});
            }
        });
    }
}
