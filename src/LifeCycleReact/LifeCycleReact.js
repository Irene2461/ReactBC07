import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycleReact extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            like: 1
        }
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(newProps,newState){
        // if else như thế nào đó để xác định
    }

    render() {
        console.log('render');
        return (
            <div className="container">
                <h1>{this.state.like} like</h1>
                <button className="btn btn-success" onClick={()=>{
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>Like</button>
                hello men!
                {this.state.like>5 ? '' : <ChildComponent/>}
            </div>
        )
    }

    componentDidMount(){
        // Thường dùng để gọi API từ backend
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}
