import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForeCastWeekItem } from "../../shared/ui/forecast-week-item";
import { fetchWeatherWeek } from "../../app/store/reducers/weatherWeekSlice";


import "./index.css";

export const WeatherWeek = () => {
  const dispatch = useDispatch();
  const { weatherWeek, status, error } = useSelector((state) => state.week);
  const city = useSelector((state) => state.week.city);

  const newWeatherWeek = weatherWeek.slice(1);

  useEffect(() => {
    const timeOut = setTimeout(() => dispatch(fetchWeatherWeek(city)), 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [city]);

  if (status === "rejected") {
    return <div className="status">{error}</div>;
  }

  if (!weatherWeek || !weatherWeek.length) {
    return <div className="status">Нет данных о погоде на неделю</div>;
  }

  return (
    <div className="forecast__week">
      {newWeatherWeek.map((day, id) => (
        <ForeCastWeekItem key={id} day={day} />
      ))}
    </div>
  );
};
