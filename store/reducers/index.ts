import { combineReducers } from "redux";
import menuReducer from "../reducers/menuReducer";

export const rootReducer = combineReducers({
  menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
