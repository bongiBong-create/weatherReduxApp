import { useSelector } from "react-redux";
import styles from "./ForecastToday.module.css";
import { getDate } from "../../app/helpers/getDate";
import { useEffect, useState } from "react";

export default function ForecastToday() {
  const [time, setTime] = useState("");
  const city = useSelector((state) => state.weather.address);
  const currentWeather = useSelector(
    (state) => state.weather.currentWeatherData
  );
  const currentDate = getDate().getCurrentDate();

  useEffect(() => {
    setTime(getDate().getCurrentTime());

    const intervalId = setInterval(() => {
      setTime(getDate().getCurrentTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <div className={styles.forecast__today}>
      <div className={styles.content__info}>
        <p className={styles["content__info--title"]}>{city}</p>
        <p className="content__info--date">{currentDate}</p>
        <p className="content__info--time">{time}</p>
      </div>
      <div className={styles.content__temp}>{currentWeather.temp}°</div>
      <div className={styles.content__weather}>
        <div className="content__weather--cloudy">Облачно</div>
        <div className="content__weather--feels">
          Ощущается как {currentWeather.feelslike}°
        </div>
      </div>
    </div>
  );
}
