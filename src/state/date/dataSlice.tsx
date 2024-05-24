import { createSlice } from "@reduxjs/toolkit";

interface DataState {
    daysAmount: number;
    currentCalendarID: string;
}

const initialState: DataState = {
    daysAmount: 7,
    currentCalendarID: "",
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        changeDaysAmount(state, action) {
            state.daysAmount = action.payload;
        },
        setCurrentCalendarID(state, action) {
            state.currentCalendarID = action.payload.calendarID;
        },
    },
});

export const { changeDaysAmount, setCurrentCalendarID } = dataSlice.actions;
export default dataSlice.reducer;
