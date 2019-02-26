import React from 'react';
import axios from 'axios';
import { config } from '../config';
import { Link } from 'react-router-dom';

export default class DeviceDIV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            devices: null
        }
    }

    componentDidMount(){
        const devices_url = config.node_url+'devices';
        axios.get(devices_url)
        .then( response => {
            if(!response.data.error){
                this.setState({
                    ...this.state,
                    devices : response.data.data
                });
            }
            console.log(this.state.devices);
        })
        .catch( error => {
            console.log(error);
        });
    }


    render(){

        const dev = (this.state.devices != null)?this.state.devices:[];
        return (
            <div id="device-block" className="device-block">
                <div className="d-block-title">
                    Devices
                </div>
                {
                    dev.map( (device, i) => {
                        return <p key={i}><Link to={ '/device/'+device.DeviceName }>{ device.DeviceName }</Link></p>
                    })
                }
            </div>
        )
    }
}