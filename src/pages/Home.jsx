import Forecast from "../widgets/Forecast";
import styles from "../app/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Forecast />
    </main>
  );
}
