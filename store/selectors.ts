import { createSelector } from "@reduxjs/toolkit";
import { services } from "../data/services";
import type { RootState } from "./index";
export const selectCounts = (state: RootState) => state.calculator;
export const selectQuote = createSelector([selectCounts], (counts) => ({
    count: Object.values(counts).reduce((sum, n) => sum + n, 0),
    total: services.reduce((sum, item) => sum + item.price * counts[item.key], 0),
}));
