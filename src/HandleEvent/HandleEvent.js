import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = (message)=>{
        alert(`Hello ${message}`);
    }
    handleClick2 = (event) => {
        this.handleClick("alo");
    }
    render() {
        return (
            <div className = "container">
                {/* Cách 1: Sử dụng arrow function khai báo xử lý sự kiện  */}
                <button id="btn" className="btn btn-success" onClick={(event)=>{
                    // event.target.id; // event.target là chính thẻ xảy ra sự kiện
                    // alert(event.target.className);
                    // alert("cybersoft");
                    this.handleClick("123");
                }}>Click</button>
                {/* Cách 2: Sử dụng callback functions */}
                <button id="btn" className="btn btn-success" onClick = {this.handleClick2}>Click2</button>
            </div>
        )
    }
}
