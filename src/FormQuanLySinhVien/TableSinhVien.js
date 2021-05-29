import React, { Component } from 'react'
import {connect} from 'react-redux'

class TableSinhVien extends Component {
    render() {

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.mangSinhVien.map((sinhVien,index)=>{
                        return <tr key={index}>
                            <td>{sinhVien.maSinhVien}</td>
                            <td>{sinhVien.tenSinhVien}</td>
                            <td>{sinhVien.email}</td>
                            <td>{sinhVien.soDienThoai}</td>
                            <td>
                                <button onClick={()=>{
                                // Gửi dữ liệu lên redux
                                const action = {
                                    type: 'XOA_SINH_VIEN',
                                    maSinhVien: sinhVien.maSinhVien
                                }

                                this.props.dispatch(action); 
                            }} className="btn btn-danger">Xoá</button>
                                <button onClick={()=>{
                                    const action = {
                                        type: 'SUA_SINH_VIEN',
                                        sinhVien : sinhVien
                                    }
                                    this.props.dispatch(action);
                                }} className="btn btn-primary">Chỉnh sửa</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (rootReducer) =>{
    return {
        mangSinhVien: rootReducer.quanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps)(TableSinhVien)
