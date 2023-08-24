import { DAT_GHE } from "../types/datGheType";

export const DatGheAction = (data) => {
  return {
    type: DAT_GHE,
    payload: data,
  };
};
