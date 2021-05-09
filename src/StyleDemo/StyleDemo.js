import React, { Component } from 'react';
//Cách 1: import đường dẫn css trực tiếp
import './styleDemo.css';
// Cách 2: Import CSS module 
import style from './styleDemo.module.css';

export default class StyleDemo extends Component {
    state = {
        fontSize : 15
    }
    render() {
        return (
            <div>
                style demo
                <p style={{
                    color : "red",
                    fontSize: this.state.fontSize
                }} className="text-red">ahihi</p>
                {/* text-green có dấu gạch nối nên phải dùng object[""] để include class text-green  */}
                <p className={`${style.bgColor} ${style["text-green"]} display-4`}>
                    cybersoft
                </p>
                <button className="btn btn-success" onClick ={()=>{
                    this.setState({
                        fontSize : this.state.fontSize + 1
                    })
                }}>Bigger</button>
                <button className="btn btn-danger" onClick = {() => {
                    this.setState({
                        fontSize : this.state.fontSize - 1
                    })
                }}>Smaller</button>
            </div>
        )
    }
}
