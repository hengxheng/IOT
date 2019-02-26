import React from 'react';
import HomeImg from "../../img/lot.png";
export default class HomePage extends React.Component{
    render(){
        return (
            <div className="Home-page">
                <h1>Home</h1>
                <div className="appInner" >
                    <img src={HomeImg} alt="iot" style={ {width: "50%"} } />
                </div>
            </div>
        )
    }
}