import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherToday } from "../../app/store/weatherTodaySlice";
import { IconWeather } from "../../shared";

import "./index.css";

export const WeatherToday = () => {
  const [time, setTime] = useState("");
  const { weatherToday, status, error } = useSelector((state) => state.today);
  const city = useSelector((state) => state.today.city);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(fetchWeatherToday(city));
    }, 2000);

    const interval = setInterval(() => {
      dispatch(fetchWeatherToday(city));
    }, 60 * 60 * 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, [city]);

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(currentTime);
    const interval = setInterval(() => {
      setTime(currentTime);
    }, 6000);

    return clearInterval(interval);
  }, []);

  if (status === "rejected") {
    return <div className="status">{error}</div>;
  }

  if (!weatherToday || !weatherToday.address) {
    return <div className="status">Нет данных о сегодняшней погоде</div>;
  }

  return (
    <div className="forecast__today">
      <div className="forecast__today--date">
        <div className="forecast__today--date__city">
          {weatherToday.address}
        </div>
        <div className="forecast__today--date__day">
          {weatherToday.datetime}
        </div>
        <div className="forecast__today--date__time">{time}</div>
      </div>
      <div className="forecast__today--temp">{weatherToday.temp}°</div>
      <div className="forecast__today--weather">
        <div className="forecast__today--weather__info">
          <IconWeather weather={weatherToday.icon} />
          <div>{weatherToday.icon}</div>
        </div>
        <div className="forecast__today--weather__feels">
          Ощущается как {weatherToday.feelslike}°
        </div>
      </div>
    </div>
  );
};
