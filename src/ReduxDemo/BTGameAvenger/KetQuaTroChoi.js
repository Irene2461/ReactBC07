import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div style={{fontSize: '40px'}} className="text-warning">{this.props.ketQua}</div>
                <div style={{fontSize: '40px'}} className="text-success">Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></div>
                <div style={{fontSize: '40px'}} className="text-success">Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.baiTapOanTuXiReducer.ketQua,
        soBanThang: state.baiTapOanTuXiReducer.soBanThang,
        soBanChoi: state.baiTapOanTuXiReducer.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);
