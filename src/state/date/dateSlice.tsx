import { createSlice } from "@reduxjs/toolkit";
import { update } from "firebase/database";

interface DateState {
    currentDay?: number;
    currentMonth?: number;
    currentYear?: number;
    choosenDay?: number | null;
    choosenMonth?: number | null;
    choosenYear?: number | null;
}

const initialState: DateState = {
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    choosenDay: null,
    choosenMonth: null,
    choosenYear: null,
};

const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        previousMonth(state) {
            if (state.currentMonth === 0) {
                state.currentMonth = 11;
                state.currentYear!--;
            } else {
                state.currentMonth!--;
            }
        },
        nextMonth(state) {
            if (state.currentMonth === 11) {
                state.currentMonth = 0;
                state.currentYear!++;
            } else {
                state.currentMonth!++;
            }
        },
        updateCurrentDate(state, action) {
            state.currentDay = action.payload[0];
            state.currentMonth = action.payload[1];
            state.currentYear = action.payload[2];
        },
        updateChoosenDate(state, action) {
            state.choosenDay = action.payload[0];
            state.choosenMonth = action.payload[1];
            state.choosenYear = action.payload[2];
        },
    },
});

export const {
    previousMonth,
    nextMonth,
    updateCurrentDate,
    updateChoosenDate,
} = dateSlice.actions;
export default dateSlice.reducer;
