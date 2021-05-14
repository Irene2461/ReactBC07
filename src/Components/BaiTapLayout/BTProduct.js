import React, { Component } from "react";

export default class BTProduct extends Component {
  render() {
    let {product} = this.props;
    // this.props là thuộc tính có sẵn của component và là thuộc tính không thể gán lại = giá trị mới
    return (
      <div>
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={product.hinhAnh}
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{product.tenSP}</h4>
              <a href="#" className="btn btn-primary">
                {product.gia}
              </a>
              <a href="#" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
