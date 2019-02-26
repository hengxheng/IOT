import React, { Component } from 'react';
import MessageBar from '../components/MessageBar';
const SharedMessageBarContext = React.createContext();

export class SharedMessageBarProvider extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
          message: '',
        };
    }
    
    openSnackbar = message => {
        this.setState({
          message,
          isOpen: true,
        });
    };


    closeSnackbar = () => {
        this.setState({
          message: '',
          isOpen: false,
        });
    };

    render() {
        const { children } = this.props;
    
        return (
          <SharedMessageBarContext.Provider
            value={{
                openSnackbar: this.openSnackbar,
                closeSnackbar: this.closeSnackbar,
                snackbarIsOpen: this.state.isOpen,
                message: this.state.message,
            }}
          >
            {children}
            <MessageBar/>
          </SharedMessageBarContext.Provider>
        );
      }
}

export const SharedMessageBarConsumer = SharedMessageBarContext.Consumer;
