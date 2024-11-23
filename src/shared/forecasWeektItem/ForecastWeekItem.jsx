import styles from "./ForecastWeekItem.module.css";

export default function ForeWeekItem({item, week}) {

  return (
    <div className={styles.forecast__item}>
      <div className="forecast__item--day">{week}</div>
      <div className={styles["forecast__item--temp"]}>{item.temp}°</div>
      <div className="forecast__item--info">
        <div className="info__weather">Облачно</div>
        <div className="info__feels">Ощущается как {item.feelslike}°</div>
      </div>
    </div>
  );
}
