import React, { Component } from "react";

export default class DataBinding extends Component {
  sinhVien = {
    maSV: "sv01",
    tenSV: "Nguyễn Văn A",
    hinhAnh: "https://picsum.photos/200",
  };

  // Phương thức
  renderProduct = () => {
    const product = {
      id: 1,
      name: "Iphone",
      img: "./img/sp_iphoneX.png",
      price: 1000,
    };
    return (
      <div className="card text-white bg-primary w-25">
        <img className="card-img-top w-100" src={product.img} alt />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price}</p>
        </div>
      </div>
    );
  };
  // Ngoài phương thức là các thuộc tính và phương thức khác
  render() {
    const title = "cybersoft";
    const imgSrc = "https://picsum.photos/200";
    return (
      <div>
        <h1>Data Binding</h1>
        <p id="title">
          {title}
        </p>
        <img src={imgSrc} />
        <br />.
        <div className="card text-white bg-dark w-25">
          <img className="card-img-top" src={this.sinhVien.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">Họ tên: {this.sinhVien.tenSV}</h4>
            <p className="card-text">Mã: {this.sinhVien.maSV}</p>
          </div>
        </div>
        {this.renderProduct()}
      </div>
    );
  }
}
