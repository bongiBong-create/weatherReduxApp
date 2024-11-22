import styles from "./ForecastToday.module.css";

export default function ForecastToday() {
  return (
    <div className={styles.forecast__today}>
      <div className={styles.content__info}>
        <p className={styles["content__info--title"]}>Москва</p>
        <p className="content__info--date">Суббота, 06 января</p>
        <p className="content__info--time">11:29</p>
      </div>
      <div className={styles.content__temp}>-7°</div>
      <div className={styles.content__weather}>
        <div className="content__weather--cloudy">Облачно</div>
        <div className="content__weather--feels">Ощущается как -11°</div>
      </div>
    </div>
  );
}
