import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let {sanpham} = this.props;
    return (
      <div>
        <div className="card text-white bg-dark">
          <img
            className="card-img-top bg-white"
            height={350}
            src={sanpham.hinhAnh}
            alt={sanpham.tenSP}
          />
          <div className="card-body">
            <h4 className="card-title">{sanpham.tenSP}</h4>
            <p className="card-text">{sanpham.giaBan.toLocaleString()}</p>
            <button
              className="btn btn-success m-1"
              onClick={() => {
                  // Gọi lại hàm xemChiTiet của BTDSSP
                this.props.xemChiTiet(sanpham);
              }}
            >
              Xem chi tiết
            </button>
            <button className="btn btn-danger m-1" onClick={()=>{
              this.props.themGioHang(sanpham)
            }}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
