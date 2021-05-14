import React, { Component } from "react";
import SanPham from './SanPham';
import GioHang from './GioHang';

export default class BTDanhSachSanPham extends Component {
  dataProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
    }, // state luôn có dữ liệu mặc định ban đầu

    gioHang:[
      // {maSP: '1', tenSP: 'Iphone', giaBan: 1000, soLuong: 2, hinhAnh: 'https://picsum.photos/201'},
      // {maSP: '2', tenSP: 'Iphone2', giaBan: 2000, soLuong: 2, hinhAnh: 'https://picsum.photos/200'},
    ]
  };

  // Hàm setState sẽ được định nghĩa tại component chứa state đó 
  setStateThemGioHang = (sanPhamClick) => {
    // Từ sản phẩm người dùng click tạo ra 1 object giống object trong giỏ hàng 
    const spGioHang = {...sanPhamClick,soLuong: 1}

    // Dựa vào sản phẩm được click thêm vào mảng giỏ hàng
    let gioHangCapNhat = this.state.gioHang;
    // gioHangCapNhat.push(spGioHang);
    // Kiểm tra sản phẩm click có trong giỏ hàng hay không
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamClick.maSP);
    if (index != -1) {
      gioHangCapNhat[index].soLuong += 1;
    }else{ 
      // Không tìm thấy
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  setStateXoaSanPham = (maSPXoa) =>{
    // console.log(maSPXoa);
    let gioHangCapNhat = this.state.gioHang;
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSPXoa);
    if (index !== -1){
        gioHangCapNhat.splice(index,1);
    }
    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  tangGiamSoLuong = (maSP, soLuong) =>{
    console.log("ma sp",maSP);
    console.log("so luong", soLuong);
    let gioHangCapNhat = this.state.gioHang;
    // Tìm sản phẩm bấm nút + hoặc - dựa vào mã sản phẩm
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    if (index !== -1){
      if ((gioHangCapNhat[index].soLuong > 1 && soLuong < 0) || soLuong > 0){
        gioHangCapNhat[index].soLuong += soLuong;
      }else{
        alert('Số lượng tối thiểu phải là 1');
      }
    }
    this.setState({
      gioHang : gioHangCapNhat
    })
  }

  renderSanPham = () => {
    return this.dataProduct.map((sanpham, index) => {
      return (
        <div className="col-4" key={index}>
            <SanPham sanpham = {sanpham} xemChiTiet = {this.xemChiTiet} themGioHang = {this.setStateThemGioHang} />
          {/* <div className="card text-white bg-dark">
            <img
              className="card-img-top bg-white"
              height={350}
              src={sanpham.hinhAnh}
              alt={sanpham.tenSP}
            />
            <div className="card-body">
              <h4 className="card-title">{sanpham.tenSP}</h4>
              <p className="card-text">{sanpham.giaBan.toLocaleString()}</p>
              <button className="btn btn-success m-1" onClick = {()=>{
                  this.xemChiTiet(sanpham);
              }}>Xem chi tiết</button>
              <button className="btn btn-danger m-1">Thêm giỏ hàng</button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  xemChiTiet = (sanpham) =>{
      console.log(sanpham);
      // Gọi setState giống hàm changeColor của bài tập chọn xe
      this.setState({
          sanPhamChiTiet : sanpham
      })
  }

  render() {
    let {tenSP,manHinh,heDieuHanh,hinhAnh,ram,rom,cameraSau,cameraTruoc} = this.state.sanPhamChiTiet;
    return (
      <div>
        <div className="container">
          <GioHang tangGiamSoLuong = {this.tangGiamSoLuong} gioHang = {this.state.gioHang} themGioHang = {this.setStateThemGioHang} xoaSanPham = {this.setStateXoaSanPham} /> 
          {/* callBack function: Làm hàm dóng vai trò là tham số truyền vào hàm hoặc component khác this.séttateThemGioHang() */} 
          <h3 className="text-center">Danh sách sản phẩm</h3>
          <div className="row">{this.renderSanPham()}</div>
          <div className="row mt-5">
            <div className="col-4">
              <h3 className="text-center">Iphone</h3>
              <img src={hinhAnh} className="w-100" />
            </div>
            <div className="col-8">
              {/* <h3 className="text-center">Thông tin sản phẩm</h3> */}
              <table className="table">
                <thead>
                  <tr>
                    <h2>Thông số kĩ thuật</h2>
                  </tr>
                  <tr>
                    <th>Màn hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>{tenSP}</th>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
