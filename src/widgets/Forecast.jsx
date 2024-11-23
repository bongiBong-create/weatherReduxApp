import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../app/store/store";

import ForecastWeek from "../shared/forecastWeek/ForecastWeek";
import ForecastToday from "../shared/forecastToday/ForecastToday";

import styles from "./Forecast.module.css";

export default function Forecast() {
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(getWeatherData());

    const intervalId = (() => dispatchAction(getWeatherData()), 60000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.forecast}>
      <ForecastToday />
      <ForecastWeek />
    </section>
  );
}
