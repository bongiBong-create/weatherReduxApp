import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpWeatherToday } from "../../shared/api/http-client";

const initialState = {
  weatherToday: {},
  status: null,
  error: null,
};

export const fetchWeatherToday = createAsyncThunk(
  "today/fetchWeatherToday",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(httpWeatherToday);

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

const weatherSlice = createSlice({
  name: "today",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherToday.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchWeatherToday.fulfilled, (state, action) => {
        state.status = "resolve";
        state.weatherToday = action.payload;
      })
      .addCase(fetchWeatherToday.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;