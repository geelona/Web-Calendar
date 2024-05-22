import { createSlice } from "@reduxjs/toolkit";

interface DateState {
    date: string;
    showcaseDate?: string;
}

const initialState: DateState = {
    date: new Date().toISOString(),
    showcaseDate: "",
};

const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        updateShowCaseDate(state, action) {
            state.showcaseDate = action.payload;
        },

        previousMonth(state) {
            let date = new Date(state.date);
            let month = date.getMonth();
            let year = date.getFullYear();
            let newDate = new Date(year, month - 1, 1);
            state.date = newDate.toISOString();
        },
        nextMonth(state) {
            let date = new Date(state.date);
            let month = date.getMonth();
            let year = date.getFullYear();
            let newDate = new Date(year, month + 1, 1);
            state.date = newDate.toISOString();
        },
    },
});

export const { updateShowCaseDate, previousMonth, nextMonth } =
    dateSlice.actions;
export default dateSlice.reducer;
