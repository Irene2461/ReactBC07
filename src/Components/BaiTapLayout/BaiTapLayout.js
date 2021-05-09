import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTProduct from './BTProduct'
import BTFooter from './BTFooter'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <BTHeader />
                <BTCarousel />
                <BTProduct />
                <BTFooter />
            </div>
        )
    }
}
