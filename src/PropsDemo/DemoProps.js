import React, { Component } from 'react'
import Product from './Product'
export default class DemoProps extends Component {

    render() {
        let object1 = {
            price: 1000,
            id: 1,
            title: 'Iphone',
            img: 'https://picsum.photos/200'
        }
        let object2 = {
            price: 3000,
            id: 1,
            title: 'Iphone XS',
            img: 'https://picsum.photos/200'
        }
        let object3 = {
            price: 4000,
            id: 1,
            title: 'Iphone XS Plus',
            img: 'https://picsum.photos/200'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Product title = "Iphone" price="1000" product = {object1}/>
                    </div>
                    <div className="col-4">
                        <Product title = "Samsung" price="1400" product = {object2}/>
                    </div>
                    <div className="col-4">
                        <Product title = "Sony X2" price="1900" product = {object3}/>
                    </div>
                </div>
            </div>
        )
    }
}
