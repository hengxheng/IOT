const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const router_led = require('./server/router/router_led');
const staticPath = path.join(__dirname, './public/dist');

const Device  = require('./server/controller/DeviceController');
let device = new Device();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/device/:deviceName', (req, res) => device.getDevicesByName(req.params.deviceName, res));
app.use('/api/devices', (req, res) => device.getAllDevices(req, res));
app.use('/api/led', router_led);
app.use('/', (req, res) => { res.send('IOT'); });

app.use(express.static(staticPath));


const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API server is running on localhost:${port}`));