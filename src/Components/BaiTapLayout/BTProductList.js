import React, { Component } from 'react'
import BTProduct from './BTProduct';

export default class BTProductList extends Component {
    dataProduct = [
        { maSP: 1, tenSP: "Black Berry", hinhAnh: "./img/sp_Blackberry.png", gia: 1000},
        { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 3000},
        { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 4000},
        { maSP: 4, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 5000},
    ];
    renderProduct = () =>{
        const result = this.dataProduct.map((product,index)=>{
            return <div className="col-3">
                    <BTProduct product = {product} />
                </div>;
        })
        return result;
    }
    render() {
        return (
            <div className="container-fluid">
                <section className="text-center display-4">BEST SMART PHONE</section>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
