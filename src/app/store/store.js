import { configureStore } from "@reduxjs/toolkit";
import weatherTodayReducer from "./reducers/weatherTodaySlice";
import weatherWeekReducer from "./reducers/weatherWeekSlice";

export const store = configureStore({
  reducer: {
    today: weatherTodayReducer,
    week: weatherWeekReducer,
  },
});
