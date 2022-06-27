import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.module.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}
