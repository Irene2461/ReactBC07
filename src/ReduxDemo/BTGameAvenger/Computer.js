import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `
        @keyframes randomItem${Date.now()}{
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
        }
    `
        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{position: 'relative'}}>
                    <img style={{position: 'absolute',left: '10%', animation: `randomItem${Date.now()} 0.5s`}} className="mt-2" width={100} height={100} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speechbubble"></div>
                <img style={{width: 140, height: 140}} src="./img/imgGame2/playerComputer.png" alt="playerComputer.png" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        computer: state.baiTapOanTuXiReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer)