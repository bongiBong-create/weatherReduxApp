import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { converterCels } from "../../shared";
import { converterDate } from "../../shared/model";

const initialState = {
  weatherWeek: [],
  status: null,
  error: null,
  city: "Санкт-Петербург",
};

export const fetchWeatherWeek = createAsyncThunk(
  "week/fetchWeatherWeek",
  async function (city, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next6days?key=Z9QMSQ5RDB4HB8Y6JHYRAYR25`
      );

      if (!response.ok) {
        throw new Error("Cant get data from server");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherWeekSlice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setWeekCity(state, action) {
      state.city = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherWeek.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchWeatherWeek.fulfilled, (state, action) => {
        const days = action.payload.days.map((day) => ({
          ...day,
          datetime: converterDate(day.datetime),
          feelslike: converterCels(day.feelslike),
          temp: converterCels(day.temp),
        }));
        state.status = "resolve";
        state.weatherWeek = days;
      })
      .addCase(fetchWeatherWeek.rejected, (state, action) => {
        state.city = "Санкт-Петербург";
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { setWeekCity } = weatherWeekSlice.actions;

export default weatherWeekSlice.reducer;
