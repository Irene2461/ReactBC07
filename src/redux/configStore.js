import {combineReducers, createStore} from 'redux';
import {baiTapGameXucXacReducer} from './reducers/baiTapGameXucXacReducer';
import {baiTapOanTuXiReducer} from './reducers/baiTapOanTuXiReducer';
import {quanLySinhVienReducer} from './reducers/quanLySinhVienReducer';

const stateDefault = [
    // {maSP: '1', tenSP: 'Iphone', giaBan: 1000, soLuong: 2, hinhAnh: 'https://picsum.photos/100'},
    // {maSP: '2', tenSP: 'Iphone2', giaBan: 2000, soLuong: 2, hinhAnh: 'https://picsum.photos/200'},
]

// const stateDefaultGame = {
//     ketQuaChon: false, //True là xĩu và false là tài
//     soBanThang: 1,
//     tongSoBanChoi: 0,
//     mangXucXac: [
//         {hinhAnh: './img/imgGame/1.png', diem: 1},
//         {hinhAnh: './img/imgGame/2.png', diem: 2},
//         {hinhAnh: './img/imgGame/3.png', diem: 3},
//     ]
// }

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ state của ứng dụng
    stateGioHang: (state = stateDefault,action) => {
        switch(action.type){
            case 'THEM_GIO_HANG':{
                const gioHangUpdate = [...state];
                // Kiểm tra sản phẩm có trong giỏ hàng hay chưa
                const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
                if (index !== -1){
                    gioHangUpdate[index].soLuong+=1;
                }else{
                    gioHangUpdate.push(action.spGioHang);
                }
                return gioHangUpdate;
            }
            case 'XOA_GIO_HANG':{
                let gioHangUpdate = [...state];
                // Lọc ra các sản phẩm không chứa mã sp xoá
                gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== action.maSPClick);
                // return về state mới => các hàm mapStateToProps từ state này sẽ tự động render lại
                return gioHangUpdate;
            }
            case 'TANG_GIAM_SO_LUONG':{
                const gioHangUpdate = [...state];
                const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);
                if (index !== -1){
                    gioHangUpdate[index].soLuong += action.soLuong;
                    if (gioHangUpdate[index].soLuong < 1){
                        gioHangUpdate[index].soLuong -= action.soLuong;
                        alert("Số sản phẩm tối thiểu là 1");
                    }
                }
                return gioHangUpdate;
            }
        }
        return state;
    },

    // baiTapGameXucXacReducer : (state = stateDefaultGame, action) =>{
    //     switch(action.type){
    //         case 'CHON_TAI_XIU':{
    //             state.ketQuaChon = action.ketQuaChon;
    //             console.log(state);
    //             // Tính chất bất biến (immutable) của redux đối với kiểu dữ liệu là object hoặc array => Chép ra object hoặc array mới
    //             return {...state};
    //         }
    //         case 'PLAY_GAME':{
    //             let mangXXNN = [];
    //             // Random 3 lần để tạo ra 3 xúc xắc ngẫu nhiên
    //             for (var i = 0; i < 3; i++){
    //                 // Tạo ra 1 con số ngẫu nhiên từ 1 tới 6
    //                 let soNN = Math.floor(Math.random() * 6) + 1;
    //                 // Từ số ngẫu nhiên tạo ra 1 object xúc xắc
    //                 let xxnn = {hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN}
    //                 mangXXNN.push(xxnn);
    //             }
    //             // Cập nhật lại state
    //             state.mangXucXac = mangXXNN;
    //             let tongDiem = mangXXNN.reduce((diem,xxnn,index)=>{
    //                 return diem+=xxnn.diem;
    //             },0) // Number 0 is the value assigned to variable diem to make a final result after adding all diem from xxnn  
    //             // So sánh xử lí kết quả
    //             if ((tongDiem > 11 && state.ketQuaChon === true) || (tongDiem <= 11 && state.ketQuaChon === false)){
    //                 state.soBanThang += 1;
    //             }
    //             state.tongSoBanChoi += 1;

    //             return {...state};
    //         }
    //     }
    //     return state;
    // }

    // Do tên thuộc tính giống nhau nên chỉ cần ghi 1 
    // baiTapGameXucXacReducer : baiTapGameXucXacReducer,
    // baiTapOanTuXiReducer : baiTapOanTuXiReducer,
    // quanLySinhVienReducer : quanLySinhVienReducer

    baiTapGameXucXacReducer,
    baiTapOanTuXiReducer,
    quanLySinhVienReducer
});

export const store = createStore(rootReducer);