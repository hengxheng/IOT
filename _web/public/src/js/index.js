// import `.scss` files
import style from '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { BrowserRouter } from "react-router-dom";


ReactDOM.hydrate((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app')); 