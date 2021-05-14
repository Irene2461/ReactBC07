import React, { Component } from "react";

export default class GioHang extends Component {
  renderGioHang = () => {
    // Nhận props gioHang từ component cha (BTDanhSáchanPham) this.props.gioHang
    let { gioHang } = this.props;
    return gioHang.map((sanpham, index) => {
      return <tr key={index}>
        <td>{sanpham.maSP}</td>
        <td>
          <img src={sanpham.hinhAnh} width={50} height={50} />
        </td>
        <td>{sanpham.tenSP}</td>
        <td>
          <button className="btn btn-success mr-2" onClick={()=>{
              this.props.tangGiamSoLuong(sanpham.maSP,1)
            }}>+</button>{sanpham.soLuong}
          <button className="btn btn-success ml-2" onClick={()=>{
              this.props.tangGiamSoLuong(sanpham.maSP,-1)
            }}>-</button>
        </td>
        <td>{(sanpham.giaBan).toLocaleString()}</td>
        <td>{(sanpham.giaBan * sanpham.soLuong).toLocaleString()}</td>
        <td>
          <button className="btn btn-danger" onClick = {()=>{
              this.props.xoaSanPham(sanpham.maSP);
          }}>Xoá</button>
        </td>
      </tr>;
    });
  };

  tinhTongSoLuong = () => {
      let tongSL = 0;
      for (let spGH of this.props.gioHang){
          tongSL += spGH.soLuong;
      }
      return tongSL;
  }

  render() {
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <div className="text-right">
          <i className="fa fa-shopping-cart"></i> ({this.tinhTongSoLuong()})
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
              {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    );
  }
}
