import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForeCastWeekItem } from "../../shared/ui/forecast-week-item";
import { fetchWeatherWeek } from "../../app/store/weatherWeekSlice";

import "./index.css";

export const WeatherWeek = () => {
  const dispatch = useDispatch();
  const { weatherWeek, status, error } = useSelector((state) => state.week);

  const newWeatherWeek = weatherWeek.slice(1);

  useEffect(() => {
    dispatch(fetchWeatherWeek("Saint-Petersburg"));
  }, [dispatch]);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "rejected") {
    return <div>{error}</div>;
  }

  if (!weatherWeek) {
    return <div>Нет данных о погоде</div>;
  }

  return (
    <div className="forecast__week">
      {newWeatherWeek.map((day, id) => (
        <ForeCastWeekItem key={id} day={day}/>
      ))}
    </div>
  );
};
