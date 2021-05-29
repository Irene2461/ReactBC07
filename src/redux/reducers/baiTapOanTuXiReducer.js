const stateDefault = {
    mangDatCuoc: [
        {
            ma: 'keo', hinhAnh: './img/imgGame2/keo.png', datCuoc: true
        },
        {
            ma: 'bua', hinhAnh: './img/imgGame2/bua.png', datCuoc: false
        },
        {
            ma: 'bao', hinhAnh: './img/imgGame2/bao.png', datCuoc: false
        }
    ],
    ketQua: "I'm iron man, i love you 3000!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'keo', hinhAnh: './img/imgGame2/keo.png'},
}

export const baiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHON_KEO_BUA_BAO': {
            // Reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                return {...item,datCuoc:false}
            })
            // console.log(mangCuocUpdate);
            // console.log(action);
            let index = mangCuocUpdate.findIndex(quancuoc => quancuoc.ma === action.maCuoc);
            if (index !== -1){
                mangCuocUpdate[index].datCuoc = true;
            }
            state.mangDatCuoc = mangCuocUpdate;
            return {...state};
        }
        case 'RAN_DOM':{
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state}
        }
        case 'END_GAME':{
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if (computer.ma === 'keo'){
                        state.ketQua = 'hoà nhau !!!';
                    }else if (computer.ma === 'bua'){
                        state.ketQua = 'thua sml !!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang+=1;
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua'){
                        state.ketQua = 'hoà nhau !!!';
                    }else if (computer.ma === 'bao'){
                        state.ketQua = 'thua sml !!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang+=1;
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao'){
                        state.ketQua = 'hoà nhau !!!';
                    }else if (computer.ma === 'keo'){
                        state.ketQua = 'thua sml !!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang+=1;
                    }
                    break;
                default:
                    state.ketQua = "I'm iron man, i love you 3000 !!!"; 
                return {...state};
            }
            state.soBanChoi+=1;
            return {...state};
        }
        default: return {...state}
    }
}
