import React from 'react';
import Header from './layout/Header';
import Main from './layout/Main';

export default class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Main/>
            </React.Fragment>
        )
    }
}