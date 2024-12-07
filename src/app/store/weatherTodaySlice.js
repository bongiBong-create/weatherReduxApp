import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { converterCels } from "../../shared";
import { converterDate } from "../../shared/model";

const initialState = {
  weatherToday: {},
  status: null,
  error: null,
  city: "Санкт-Петербург",
};

export const fetchWeatherToday = createAsyncThunk(
  "today/fetchWeatherToday",
  async function (city, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=Z9QMSQ5RDB4HB8Y6JHYRAYR25`
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

const weatherSlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    setTodayCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherToday.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchWeatherToday.fulfilled, (state, action) => {
        const temp = converterCels(action.payload.currentConditions.temp);
        const feelslike = converterCels(
          action.payload.currentConditions.feelslike
        );
        const datetime = converterDate(action.payload.days[0].datetime);
        state.status = "resolve";
        state.weatherToday = {
          address: action.payload.address,
          icon: action.payload.currentConditions.icon,
          temp,
          feelslike,
          datetime,
        };
      })
      .addCase(fetchWeatherToday.rejected, (state, action) => {
        state.city = "Санкт-Петербург";
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { setTodayCity, setCels } = weatherSlice.actions;

export default weatherSlice.reducer;
