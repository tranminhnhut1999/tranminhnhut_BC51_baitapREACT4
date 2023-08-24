import data from "../../data/DanhSachGhe.json";
import { DAT_GHE } from "../types/datGheType";
const DEFAUT_STATE = {
  danhSachGhe: data,
};

export const DatGheReducer = (state = DEFAUT_STATE, action) => {
  switch (action.type) {
    case DAT_GHE: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));

      const index = data.findIndex(
        (element) => element.SoGhe === action.payload.SoGhe
      );
      data[index].DangChon = !data[index].DangChon;
      state.danhSachGhe = data;
      break;
    }
  }
  return { ...state };
};
