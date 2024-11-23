import { useSelector } from "react-redux";
import ForeWeekItem from "../forecasWeektItem/ForecastWeekItem";
import { getDate } from "../../app/helpers/getDate";

import styles from "./ForecastWeek.module.css";

export default function ForecastWeek() {
  const weatherWeek = useSelector((state) => state.weather.weatherDataWeek);
  const weekDay = getDate().getWeekDay()

  return (
    <div className={styles.forecast__week}>
      {weatherWeek.map((item, i) => (
        <ForeWeekItem key={i} item={item} week={weekDay[i]}/>
      ))}
    </div>
  );
}
