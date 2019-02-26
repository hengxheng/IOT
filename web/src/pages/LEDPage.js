import React from 'react';
import LightDIV from '../components/LightDIV';
import { SharedMessageBarProvider } from '../context/SharedMessageBarContext';

export default class LEDPage extends React.Component{
    render(){
        return (
            <div className="LED-page">
                <h1>LED</h1>
                <div className="appInner" >
                    <SharedMessageBarProvider>
                        <LightDIV/>
                    </SharedMessageBarProvider>
                </div>
            </div>
        )
    }
}