import ForeWeekItem from "../forecasWeektItem/ForecastWeekItem";
import styles from "./ForecastWeek.module.css";

const week = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

export default function ForecastWeek() {
  return (
    <div className={styles.forecast__week}>
      {week.map((item) => (
        <ForeWeekItem key={item.id} />
      ))}
    </div>
  );
}
