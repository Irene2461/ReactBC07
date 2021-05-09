import React, { Component } from 'react'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PageContent/>
                <Footer/>
            </div>
        )
    }
}
