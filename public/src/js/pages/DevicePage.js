import React from 'react';
import DeviceDIV from '../components/DeviceDIV';
import { SharedMessageBarProvider } from '../context/SharedMessageBarContext';

export default class DevicePage extends React.Component{
    render(){
        return (
            <div className="device-page">
                <div className="appInner" >
                    <SharedMessageBarProvider>
                        <DeviceDIV/>
                    </SharedMessageBarProvider>
                </div>
            </div>
        )
    }
}