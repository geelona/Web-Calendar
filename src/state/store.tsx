import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./date/dateSlice";
import dataReducer from "./date/dataSlice";

export const store = configureStore({
    reducer: {
        date: dateReducer,
        data: dataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
