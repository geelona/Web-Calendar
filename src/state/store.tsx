import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./date/dateSlice";
import dataReducer from "./date/dataSlice";
import selectedEventReducer from "./selectedEvent/selectedEventSlice";

export const store = configureStore({
    reducer: {
        date: dateReducer,
        data: dataReducer,
        selectedEvent: selectedEventReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
