import React, { Component } from "react";

export default class Product extends Component {
 
  render() {
    let {price,title} = this.props;
    let {product} = this.props;
      // this.props: thuộc tính là thuộc tính có sẵn của react class component, giúp chúng ta nhận giá trị từ component cha truyền vào
    return (
      <div>
        <div className="card text-white bg-primary">
          <img
            className="card-img-top w-100"
            src={product.img}
            alt = {product.title}
          />
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
