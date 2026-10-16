import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Counts, ServiceKey } from "../types/service";
const calculatorSlice = createSlice({
    name: "calculator",
    initialState: { sofa: 1, corner: 0, chair: 0, mattress: 0 } as Counts,
    reducers: {
        adjust(state, action: PayloadAction<{ key: ServiceKey; delta: number }>) {
            const { key, delta } = action.payload;
            state[key] = Math.max(0, Math.min(9, state[key] + delta));
        },
        setCounts(_state, action: PayloadAction<Counts>) {
            return action.payload;
        },
    },
});

export const { adjust, setCounts } = calculatorSlice.actions;
export default calculatorSlice.reducer;
