import React from 'react';
import axios from 'axios';
import Icon from '@material-ui/core/Icon';
import { Button } from '@material-ui/core';
import { config } from '../config';
import { SharedMessageBarConsumer } from '../context/SharedMessageBarContext';


export default class LightDIV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            d_title : "LED",
            light_mode : 0, //0:off, 1:on, 2:flash
        }
    }

    componentDidMount(){
        const getMode_url = config.node_url+'led';
        axios.get(getMode_url)
        .then( response => {
            if(!response.data.error){
                this.setState({
                    ...this.state,
                    light_mode : response.data.Mode
                });
            }
        })
        .catch( error => {
            console.log(error);
        });
    }

    changeLightMode(s){
        this.setState({
            light_mode : s
        });

        const setMode_url = config.node_url+'led/mode/'+s;
        axios.get(setMode_url)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });
    }

    render(){
        const styles = {
            light: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '500px',
              margin: '0 auto'
            },
          };

        return (
            <SharedMessageBarConsumer>
                {({ openSnackbar }) => (
                    <div id="ligth-block" className="device-block">
                        <div className="d-block-title">
                            { this.state.d_title }
                        </div>
                        <div className="d-block-ctrl" style={styles.light}>
                            <Button id="l-btn1" variant="outlined" aria-label="Light" className={"primary-btn "+ (this.state.light_mode === 0 ? "" : "off")} 
                            onClick={ (e) => {this.changeLightMode(0); openSnackbar("Mode: 0");} }>
                                <Icon>ON</Icon>
                            </Button>
                            <Button id="l-btn2" variant="outlined" aria-label="Light" className={"primary-btn "+ (this.state.light_mode === 1 ? "" : "off")} 
                            onClick={ (e) => {this.changeLightMode(1); openSnackbar("Mode: 1");} }>
                                <Icon>OFF</Icon>
                            </Button>
                            <Button id="l-btn3" variant="outlined" aria-label="Light" className={"primary-btn "+ (this.state.light_mode === 2 ? "" : "off")} 
                            onClick={ (e) => {this.changeLightMode(2); openSnackbar("Mode: 2");} }>
                                <Icon>FLASH</Icon>
                            </Button>
                        </div>
                    </div>
                )}
            </SharedMessageBarConsumer>
        )
    }
}