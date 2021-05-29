import React, { Component } from 'react'
// Kết nối component với redux store
import { connect } from "react-redux";

class SanPhamRedux extends Component {
    render() {
        const {sanPham} = this.props;
        return (
            <div>
            <div className="card text-white bg-dark">
                <img height={300} className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} />
                <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                <button onClick={()=>{
                    this.props.themGioHang(sanPham);
                }} className="btn btn-warning text-white">Thêm giỏ hàng</button>
                </div>
            </div>
            </div>
        )
    }
}
// Hàm sinh ra props là hàm xử lý để đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) =>{
    // dispatch giống hàm setState
    return {
        themGioHang: (spClick) => {
            const action = {
                type : 'THEM_GIO_HANG', // thuộc tính bắt buộc của action
                spGioHang: {...spClick,soLuong: 1}
            }
            // Sử dụng hàm dispatch để gửi dữ liệu lên redux
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(SanPhamRedux)
