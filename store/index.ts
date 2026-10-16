import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";
export const makeStore = () =>
    configureStore({ reducer: { calculator: calculatorReducer } });
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
