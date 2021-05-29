import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi' 
import style from '../../assets/styles/components/BTGameXucXac.module.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            // <div style={{background : `url(./img/imgGame/bgGame.png)`, height: `100vh`, width: `100vw`}}>
            //     <XucXac/>
            //     <KetQuaTroChoi/>
            // </div>
            <div className={`${style.bgGame}`}>
                <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}


