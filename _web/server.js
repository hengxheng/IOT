// import React from "react";
// import { renderToString } from "react-dom/server";
// import { StaticRouter, matchPath } from "react-router-dom";
// import fs from 'fs';
// import serialize from "serialize-javascript";
// import routes from "./site-routes";
// import axios from 'axios';
// import { config } from './server/config';

// import App from "./public/src/js/app";
import DeviceController from "./server/controller/DeviceController";



const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const router_led = require('./server/router/router_led');
const staticPath = path.join(__dirname, './public/dist');

let Device = new DeviceController();

//express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/device/:deviceName', (req, res) => Device.getDevicesByName(req.params.deviceName, res));
app.use('/api/devices', (req, res) => Device.getAllDevices(req, res));
app.use('/api/led', router_led);
app.use('/api', (req, res) => { res.send('IOT'); });

app.use(express.static(staticPath));
//SSR
// app.use('/assets', express.static(staticPath));
// app.use('*', (req, res, next) => {
//     const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
//     const data = activeRoute.fetchInitialData?activeRoute.fetchInitialData(req.path):'';
//     let context = { data: data+" context" };
//     const reactDom = renderToString(
//         <StaticRouter location={req.url} context={context} >
//             <App/>
//         </StaticRouter>
//     );
//     const indexFile = path.resolve('./index.html');
//     fs.readFile(indexFile, 'utf8', (err, indexData) => {
//         if (err) {
//           console.error('Something went wrong:', err);
//           return res.status(500).send('Oops, better luck next time!');
//         }
//         console.log(indexData);
//         const html = indexData.replace('</head>', 
//         `<link rel="stylesheet" href="/assets/style.css" type="text/css">
//         <script src="/assets/bundle.js" defer type="text/javascript"></script>
//         <script>window.__INITIAL_DATA__ = ${serialize(data)};</script>
//          </head>`)
//         .replace('<div id="app"></div>', `<div id="app">${reactDom}</div>`);
//         console.log(html);
//         return res.send(html);
//       });
// });


const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));