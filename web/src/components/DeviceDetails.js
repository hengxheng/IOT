import React from 'react';
import axios from 'axios';
import { config } from '../config';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class DeviceDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            device: {}
        }
    }

    componentDidMount(){
        const DeviceName = this.props.DeviceName;
        const devices_url = config.node_url+'device/'+DeviceName;
        axios.get(devices_url)
        .then( response => {
            if(!response.data.error){
                this.setState({
                    ...this.state,
                    device : response.data.data
                });
            }
        })
        .catch( error => {
            console.log(error);
        });
    }

    render(){
        const device = this.state.device;

        const classes = {
            root: {
              width: '60%',
              margin: '3px auto',
              overflowX: 'auto',
            },
            table: {
              minWidth: 700,
            },
        };

        return (
            <div id="device-block" className="device-block">
                <div className="d-block-title">
                    {this.props.DeviceName}
                </div>
                <div className="d-block-list">
                    <Paper style={classes.root}>
                        <Table style={classes.table}>
                            <TableBody>
                            {                
                                Object.keys(device).map((k) => {
                                    return (
                                        <TableRow key={k}>
                                            <TableCell component="th" scope="row">{k}</TableCell>
                                            <TableCell numeric>{device[k]}</TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        )
    }
}