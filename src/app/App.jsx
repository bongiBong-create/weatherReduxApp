import Header from "../features/header/Header";
import Forecast from "../widgets/Forecast";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
