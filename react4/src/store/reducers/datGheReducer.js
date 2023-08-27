import data from "../../data/DanhSachGhe.json";
import { DAT_GHE } from "../types/datGheType";
const DEFAUT_STATE = {
  danhSachGhe: data,
};

export const DatGheReducer = (state = DEFAUT_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case DAT_GHE: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));

      const index = data.findIndex(
        (element) => element.soGhe === action.payload.soGhe
      );
      data[index].danhSachGhe.daDat = !data[index].danhSachGhe.daDat;
      state.danhSachGhe = data;
      break;
    }
  }
  return { ...state };
};
