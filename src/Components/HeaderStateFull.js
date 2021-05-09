import React, { Component } from 'react'
// Tạo state full component = cú pháp rcc (react class component)
export default class HeaderStateFull extends Component {
    methodA(){

    }
    // Phương thức render là phương thức có sẵn của react class component chứa giao diện của ứng dụng
    render() {
        return (
            <div className="bg-dark text-white">
                <h1 className = "display-4 p-5">Title</h1>  
                <p className="p-5">Content blah blah</p>              
            </div>
        )
    }
}
