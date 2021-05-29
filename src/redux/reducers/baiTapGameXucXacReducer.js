const stateDefaultGame = {
    ketQuaChon: false, //True là xĩu và false là tài
    soBanThang: 1,
    tongSoBanChoi: 0,
    mangXucXac: [
        {hinhAnh: './img/imgGame/1.png', diem: 1},
        {hinhAnh: './img/imgGame/2.png', diem: 2},
        {hinhAnh: './img/imgGame/3.png', diem: 3},
    ]
}
export const baiTapGameXucXacReducer = (state = stateDefaultGame, action) =>{
    switch(action.type){
        case 'CHON_TAI_XIU':{
            state.ketQuaChon = action.ketQuaChon;
            console.log(state);
            // Tính chất bất biến (immutable) của redux đối với kiểu dữ liệu là object hoặc array => Chép ra object hoặc array mới
            return {...state};
        }
        case 'PLAY_GAME':{
            let mangXXNN = [];
            // Random 3 lần để tạo ra 3 xúc xắc ngẫu nhiên
            for (var i = 0; i < 3; i++){
                // Tạo ra 1 con số ngẫu nhiên từ 1 tới 6
                let soNN = Math.floor(Math.random() * 6) + 1;
                // Từ số ngẫu nhiên tạo ra 1 object xúc xắc
                let xxnn = {hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN}
                mangXXNN.push(xxnn);
            }
            // Cập nhật lại state
            state.mangXucXac = mangXXNN;
            let tongDiem = mangXXNN.reduce((diem,xxnn,index)=>{
                return diem+=xxnn.diem;
            },0) // Number 0 is the value assigned to variable diem to make a final result after adding all diem from xxnn  
            // So sánh xử lí kết quả
            if ((tongDiem > 11 && state.ketQuaChon === true) || (tongDiem <= 11 && state.ketQuaChon === false)){
                state.soBanThang += 1;
            }
            state.tongSoBanChoi += 1;

            return {...state};
        }
    }
    return state;
}