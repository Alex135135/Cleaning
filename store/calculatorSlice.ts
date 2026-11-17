import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Counts, ServiceKey } from '../types/service';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: { sofa: 1, corner: 0, chair: 0, mattress: 0 } as Counts,
    reducers: {
        adjust(state, action: PayloadAction<{ key: ServiceKey; delta: number }>) {
            const { key, delta } = action.payload;

            // Проверяем, что ключ валиден для типа Counts (защита от передачи несуществующего ключа)
            if (!(key in state)) {
                console.warn(`Invalid service key: ${key}`);
                return;
            }

            const newValue = state[key] + delta;
            state[key] = Math.max(0, Math.min(9, newValue));
        },

        setCounts(_state, action: PayloadAction<Counts>) {

            const payload = action.payload;
            const validKeys: (keyof Counts)[] = ['sofa', 'corner', 'chair', 'mattress'];

            for (const k of validKeys) {
                if (typeof payload[k] !== 'number' || payload[k] < 0 || payload[k] > 9) {
                    console.warn(`Invalid count value for ${k}: ${payload[k]}`);
                    return state;
                }
            }

            return payload;
        },
    },
});

export const { adjust, setCounts } = calculatorSlice.actions;
export default calculatorSlice.reducer;