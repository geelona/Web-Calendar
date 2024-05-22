import { createSlice } from "@reduxjs/toolkit";

interface DataState {
    daysAmount: number;
}

const initialState: DataState = {
    daysAmount: 7,
};

const dataSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        changeDaysAmount(state, action) {
            state.daysAmount = action.payload;
        },
    },
});

export const { changeDaysAmount } = dataSlice.actions;
export default dataSlice.reducer;
