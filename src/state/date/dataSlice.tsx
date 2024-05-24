import { createSlice } from "@reduxjs/toolkit";

interface DataState {
    daysAmount: number;
    currentCalendarsID: string[];
}

const initialState: DataState = {
    daysAmount: 7,
    currentCalendarsID: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        changeDaysAmount(state, action) {
            state.daysAmount = action.payload;
        },
        addCurrentCalendarID(state, action) {
            state.currentCalendarsID.push(action.payload);
        },
        removeCurrentCalendarID(state, action) {
            state.currentCalendarsID = state.currentCalendarsID.filter(
                (calendar: any) =>
                    calendar.calendarID !== action.payload.calendarID
            );
        },
    },
});

export const {
    changeDaysAmount,
    addCurrentCalendarID,
    removeCurrentCalendarID,
} = dataSlice.actions;
export default dataSlice.reducer;
