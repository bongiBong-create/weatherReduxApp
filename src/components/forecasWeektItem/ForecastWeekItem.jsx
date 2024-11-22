import styles from "./ForecastWeekItem.module.css";

export default function ForeWeekItem() {
  return (
    <div className={styles.forecast__item}>
      <div className="forecast__item--day">Суббота, 06 января</div>
      <div className={styles["forecast__item--temp"]}>-7°</div>
      <div className="forecast__item--info">
        <div className="info__weather">Облачно</div>
        <div className="info__feels">Ощущается как -11°</div>
      </div>
    </div>
  );
}
