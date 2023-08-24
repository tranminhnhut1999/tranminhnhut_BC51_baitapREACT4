import { combineReducers, createStore } from "redux";
import { DatGheReducer } from "./reducers/datGheReducer";

const rootReducer = combineReducers({
  DatGheReducer: DatGheReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
