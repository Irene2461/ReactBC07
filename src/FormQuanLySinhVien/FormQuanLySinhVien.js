import React, { Component, Fragment } from 'react'
import TableSinhVien from './TableSinhVien'
import {connect} from 'react-redux'

class FormQuanLySinhVien extends Component {
    state = {
        values:{
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors:{
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }
    }

    // handleChangeInput = (event) => {
    //     let {value,name} = event.target;
    //     // let value = event.target.value;
    //     // let name = event.target.name;
    //     this.setState({
    //         [name] : value
    //     }, ()=>{
    //         console.log(this.state);
    //     })
    // }

    handleChangeInput = (event) => {
        // Lấy thông tin thẻ dựa trên biến event
        let {value,name} = event.target;
        // Lấy ra giá trị của this.state.value hiện tại
        let newValue = {...this.state.values};
        // Lấy ra giá trị của this.state.errors hiện tại
        let newErrors = {...this.state.errors};
        // Thay đổi thuộc tính trong this.state.values
        newValue[name] = value;

        let errorMessage = "";
        // Xử lý thay đổi errors
        if (newValue[name].trim() === ''){
            errorMessage = name + ' không được để trống';
        }

        // Lấy thuộc tính tự tạo trên thẻ
        let typeEmail = event.target.getAttribute('typeEmail');
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (typeEmail === "email"){
            // Nếu trường đang thay đổi sai định dạng email
            if (!re.test(newValue[name])){
                errorMessage = name + ' không đúng định dạng!';
            }
        }
        newErrors[name] = errorMessage;

        // Cập nhật lại this.state.values = newValue (giá trị mới thay đổi khi người dùng handleChange)
        this.setState({
            values : newValue,
            errors: newErrors
        })
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện reload browser
        // Kiểm tra submit
        // Form hợp lệ khi tất cả value khác rỗng và tất cả lỗi phải bằng rỗng => submit
        let valid = true;
        let {values,errors} = this.state;
        for (let keyName in values){
            if (values[keyName].trim() === ''){
                //Values có 1 trường vi phạm => bị bỏ trống
                valid = false;
            }
        }
        for (let keyName in errors){
            if (errors[keyName] !== ''){
                // Có 1 trường hiển thị lỗi
                valid = false;
            }
        }

        if (!valid){
            alert('Dữ liệu không hợp lệ');
            return;
        }

        // Đưa dữ liệu lên redux sau khi lấy thông tin từ người dùng
        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien: this.state.values
        }

        this.props.dispatch(action);

    }

    componentWillReceiveProps(newProps){
        // Props mới this.props(trước khi thay đổi), newProps(sau khi thay đổi)
        // Khi người dùng bấm nút chỉnh sửa => đem props mới từ redux về và gán cho state
        this.setState({
            values: newProps.sinhVienSua
        })
    }

    render() {
        let {maSinhVien,tenSinhVien,soDienThoai,email} = this.state.values;
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-header bg-dark text-white">QUẢN LÝ SINH VIÊN</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Mã sinh viên</p>
                                        <input className="form-control" value={maSinhVien} name="maSinhVien" onChange={this.handleChangeInput}/>
                                        <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Số điện thoại</p>
                                        <input className="form-control" value={soDienThoai} name="soDienThoai" onChange={this.handleChangeInput}/>
                                        <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Tên sinh viên</p>
                                        <input className="form-control" value={tenSinhVien} name="tenSinhVien" onChange={this.handleChangeInput} />
                                        <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input typeEmail="email" value={email} className="form-control" name="email" onChange={this.handleChangeInput}/>
                                        <p className="text text-danger">{this.state.errors.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-right">
                            <button type="submit" className="btn btn-success">Thêm sinh viên</button>
                        </div>
                    </div>                
                </form>
                <TableSinhVien/>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        sinhVienSua: rootReducer.quanLySinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormQuanLySinhVien)
