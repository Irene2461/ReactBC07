import React, { Component } from 'react'
import {connect} from 'react-redux' // Thư viện kết nối store

class KetQuaTroChoi extends Component {

    render() {
        return (
            <div className="text-center container">
                <div className="display-4">
                    <div>Bạn chọn: <span className="text-danger">{this.props.ketQuaChon ? "TÀI" : "XĨU"}</span></div>
                </div>
                <div className="display-4">
                    <div>Số bàn thắng: <span className="text-danger">{this.props.soBanThang}</span></div>
                </div>
                <div className="display-4">
                    <div>Số bàn chơi: <span className="text-danger">{this.props.tongSoBanChoi}</span></div>
                </div>
                <div className="display-4">
                    <button className="btn btn-warning"><span onClick={()=>{
                        //Tạo 1 action đưa lên reducer 
                        const action = {
                            type: 'PLAY_GAME',
                        
                        }
                        // Dùng hàm dispatch để gửi dữ liệu đi
                        this.props.dispatch(action);
                    }} className="display-4 p-2">Play game</span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) =>{
    // Lấy giá trị từ reducer về tạo thành props của component
    return {
        soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
        tongSoBanChoi: rootReducer.baiTapGameXucXacReducer.tongSoBanChoi,
        ketQuaChon: rootReducer.baiTapGameXucXacReducer.ketQuaChon
    }

}


export default connect(mapStateToProps)(KetQuaTroChoi)
