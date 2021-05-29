
const stateDefault = {
    mangSinhVien:[
        {maSinhVien : '1', tenSinhVien: 'Nguyễn Văn A', soDienThoai: '09087874541', email: 'abc@gmail.com'},
        {maSinhVien : '2', tenSinhVien: 'Nguyễn Văn B', soDienThoai: '09082222222', email: 'xyz@gmail.com'},
    ],
    sinhVienSua: {
        maSinhVien : '', 
        tenSinhVien: '', 
        soDienThoai: '', 
        email: ''
    }
}

export const quanLySinhVienReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'THEM_SINH_VIEN':{
            let mangSinhVienCapNhat = [...state.mangSinhVien];
            mangSinhVienCapNhat.push(action.sinhVien);
            // Cập nhật lại state
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state};
        }
        case 'XOA_SINH_VIEN':{
            let mangSinhVienCapNhat = [...state.mangSinhVien];
            mangSinhVienCapNhat = mangSinhVienCapNhat.filter(sv => sv.maSinhVien !== action.maSinhVien);
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state};
        }
        case 'SUA_SINH_VIEN':{
            state.sinhVienSua = action.sinhVien;
            return {...state};
        }

        default: {return state}
    }
}
