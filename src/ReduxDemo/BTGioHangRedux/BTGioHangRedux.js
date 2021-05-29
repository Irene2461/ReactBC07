import React, { Component } from "react";
// Kết nối component với redux store
import { connect } from "react-redux";

class BTGioHangRedux extends Component {
  render() {
    return (
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
          {this.props.gioHang.map((spGioHang, index) => {
            return (
              <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td>
                  <img
                    src={spGioHang.hinhAnh}
                    width={50}
                    height={50}
                    alt={spGioHang.tenSP}
                  />
                </td>
                <td>{spGioHang.tenSP}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGioHang.maSP, 1);
                    }}
                    className="btn btn-success mr-1"
                  >
                    +
                  </button>
                  {spGioHang.soLuong}
                  <button
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGioHang.maSP, -1);
                    }}
                    className="btn btn-success ml-1"
                  >
                    -
                  </button>
                </td>
                <td>{spGioHang.giaBan}</td>
                <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.xoaGioHang(spGioHang.maSP);
                    }}
                    className="btn btn-danger"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
// Đây là hàm lấy state từ redux (rootReducer) => biến thành props của component
const mapStateToProps = (rootReducer) => {
  //   console.log("rootReducer", rootReducer);
  return {
    gioHang: rootReducer.stateGioHang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log({ maSPClick });
      // Tạo action đưa giá trị lên redux
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick: maSPClick,
      };
      // Đưa action lên store
      dispatch(action);
    },
    tangGiamSoLuong: (maSPClick, soLuong) => {
      // Tạo ra 1 action
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        soLuong: soLuong,
        maSPClick: maSPClick,
      };
      dispatch(action);
    },
  };
};

// Tạo ra component có kết nối với store từ Component hiện tại
// const GioHangConnectRedux = connect(mapStateToProps)(BTGioHangRedux)

// export default GioHangConnectRedux;
export default connect(mapStateToProps, mapDispatchToProps)(BTGioHangRedux);
