import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherToday } from "../../app/store/weatherTodaySlice";
import { IconWeather } from "../../shared";

import "./index.css";

export const WeatherToday = () => {
  const { weatherToday, status, error } = useSelector((state) => state.today);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherToday());

    const interval = setInterval(() => {
      dispatch(fetchWeatherToday());
    }, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "rejected") {
    return <div>{error}</div>;
  }

  if (!weatherToday || !weatherToday.currentConditions) {
    return <div>Нет данных о погоде</div>;
  }

  return (
    <div className="forecast__today">
      <div className="forecast__today--date">
        <div className="forecast__today--date__city">
          {weatherToday.address}
        </div>
        <div className="forecast__today--date__day">Суббота, 06 января</div>
        <div className="forecastr__today--date__time">11:29</div>
      </div>
      <div className="forecast__today--temp">
        {weatherToday.currentConditions.temp}°
      </div>
      <div className="forecast__today--weather">
        <div className="forecast__today--weather__info">
          <IconWeather weather={weatherToday.currentConditions.icon} />
          <div>{weatherToday.currentConditions.icon}</div>
        </div>
        <div className="forecast__today--weather__feels">
          Ощущается как {weatherToday.currentConditions.feelslike}°
        </div>
      </div>
    </div>
  );
};
