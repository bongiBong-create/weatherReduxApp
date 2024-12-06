import { configureStore } from "@reduxjs/toolkit";
import weatherTodayReducer from "./weatherTodaySlice";
import weatherWeekReducer from "./weatherWeekSlice";

export const store =  configureStore({
  reducer: {
    today: weatherTodayReducer,
    week: weatherWeekReducer,
  },
});