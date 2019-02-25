import React from 'react';
import DeviceDetails from '../components/DeviceDetails';

export default class TerminalPage extends React.Component{
    constructor(props) {
        super(props);
        if (props.staticContext && props.staticContext.data) {
            this.state = {
              data: props.staticContext.data
            };
          } else {
            this.state = {
              data: this.props.match.params.name
            };
          }
    }

    componentDidMount() {
        setTimeout(() => {
          if (window.__INITIAL_DATA__) {
            this.setState({
              data: window.__INITIAL_DATA__
            });
            delete window.__INITIAL_DATA__;
          } else {
              this.setState({
                data: this.props.match.params.name
              });
          }
        }, 0);
      }

    render(){
        return (
            <div className="terminal-page">
                <div className="appInner" >
                    <DeviceDetails DeviceName={this.state.data}/>
                </div>
            </div>
        )
    }
}