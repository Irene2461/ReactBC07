import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btn btn-danger">
                            <div onClick={()=>{
                                const action = {
                                    type: 'CHON_TAI_XIU',
                                    ketQuaChon: true
                                }
                                // Sử dụng hàm dispatch từ redux cung cấp đưa action lên reducer
                                this.props.dispatch(action);
                            }} className="display-4 p-5">TÀI</div>
                        </button>
                    </div>
                    {/* <div className="col-4">
                        <img src={this.props.mangXucXac[0].hinhAnh} style={{width: 50, height: 50}} alt="1.png" />
                        <img src={this.props.mangXucXac[1].hinhAnh} style={{width: 50, height: 50}} alt="1.png" />
                        <img src={this.props.mangXucXac[2].hinhAnh} style={{width: 50, height: 50}} alt="1.png" />
                    </div> */}
                    <div className="col-4">
                        {this.props.mangXucXac.map((item,index)=>{
                            return <img key={index} src={item.hinhAnh} style={{width: 50, height: 50}} alt={item.diem} />
                        })}
                    </div>
                        <div onClick={()=>{
                            const action = {
                                type: 'CHON_TAI_XIU',
                                ketQuaChon: false
                            }
                            // Sử dụng hàm dispatch từ redux cung cấp đưa action lên reducer
                            this.props.dispatch(action);
                        }} className="col-4">
                        <button className="btn btn-dark">
                            <div className="display-4 p-5">XĨU</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
// Lấy dữ liệu hiển thị từ redux hiển thị lên hình
const mapStateToProps = (rootReducer) =>{
    return{
        mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)
