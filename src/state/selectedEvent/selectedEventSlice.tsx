import { createSlice } from "@reduxjs/toolkit";

interface SelectedEventState {
    isInfoOpen: boolean;
    currentEvent: any;
    calendarData: any;
}

const initialState: SelectedEventState = {
    isInfoOpen: false,
    currentEvent: null,
    calendarData: "",
};

const selectedEventSlice = createSlice({
    name: "selectedEvent",
    initialState,
    reducers: {
        setInfoState: (state, action) => {
            state.isInfoOpen = action.payload;
        },
        setCurrentEvent: (state, action) => {
            state.currentEvent = action.payload;
        },
        setCalendarData: (state, action) => {
            state.calendarData = action.payload;
        },
    },
});

export const { setInfoState, setCurrentEvent, setCalendarData } =
    selectedEventSlice.actions;
export default selectedEventSlice.reducer;
