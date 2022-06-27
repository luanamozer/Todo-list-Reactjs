import styles from "./Header.module.css";

import logoRocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoRocket} alt="Logo Todo-List" />
      <div className={styles.title}>
        <span>ToDo</span>
        <span>List</span>
      </div>
    </header>
  );
}
