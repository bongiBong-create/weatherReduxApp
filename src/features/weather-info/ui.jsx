import { WeatherWeek } from "../weather-week";
import { WeatherToday } from "../weather-today";

import "./index.css";

export const WeatherInfo = () => {
  return (
    <section className="weather">
      <WeatherToday />
      <WeatherWeek />
    </section>
  );
};
