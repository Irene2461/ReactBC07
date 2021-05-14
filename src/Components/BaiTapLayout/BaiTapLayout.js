import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTProduct from './BTProduct'
import BTFooter from './BTFooter'
import BTProductList from './BTProductList'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <BTHeader />
                <BTCarousel />
                <BTProductList />
                <BTFooter />
            </div>
        )
    }
}
