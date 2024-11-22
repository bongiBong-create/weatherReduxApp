import ForecastToday from "../components/forecastToday/ForecastToday";
import ForecastWeek from "../components/forecastWeek/forecastWeek";

import styles from "./Forecast.module.css";

export default function Forecast() {
  return (
    <section className={styles.forecast}>
      <ForecastToday />
      <ForecastWeek />
    </section>
  );
}
