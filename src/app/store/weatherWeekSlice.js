import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherWeek: [],
  status: null,
  error: null,
};

export const fetchWeatherWeek = createAsyncThunk(
  "week/fetchWeatherWeek",
  async function (city, { rejectWithValue }) {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=Z9QMSQ5RDB4HB8Y6JHYRAYR25`);

      if (!response.ok) {
        throw new Error("Cant get data from server");
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherWeekSlice = createSlice({
  name: "week",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherWeek.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchWeatherWeek.fulfilled, (state, action) => {
        state.status = "resolve";
        state.weatherWeek = action.payload.days;
      })
      .addCase(fetchWeatherWeek.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default weatherWeekSlice.reducer;