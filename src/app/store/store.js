import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { API__KEY } from "../constants/constants";
import axios from "axios";

const initialState = {
  currentWeatherData: {},
  weatherDataWeek: [],
  address: "Saint-Petersburg",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateWeatherData(state, action) {
      state.currentWeatherData = action.payload.currentWeatherData;
      state.weatherDataWeek = action.payload.weatherDataWeek;
      state.address = action.payload.address;
    },
  },
});

export const getWeatherData = () => {
  return async (dispatchAction) => {
    const weatherDataHttpRequest = async () => {
      const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saint-Petersburg?unitGroup=metric&key=Z9QMSQ5RDB4HB8Y6JHYRAYR25`);
      return response;
    };

    try {
      const weatherData = await weatherDataHttpRequest();
      console.log(weatherData)
      dispatchAction(
        weatherSlice.actions.updateWeatherData({
          currentWeatherData: weatherData.data.currentConditions || {},
          weatherDataWeek: weatherData.data.days.slice(1, 7),
          address: weatherData.data.address,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const weatherActions = weatherSlice.actions;

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});
