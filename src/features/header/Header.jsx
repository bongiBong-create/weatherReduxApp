import logo from "../../app/imgs/logo.svg";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.header__search}>
        <input type="text" placeholder="Поиск по городу" />
      </div>
    </header>
  );
}
