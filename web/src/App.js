import React from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import { BrowserRouter } from 'react-router-dom';
export default class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header/>
                    <Main/>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}