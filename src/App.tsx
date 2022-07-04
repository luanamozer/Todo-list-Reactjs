import { Header } from "./components/Header/Header";
import { FormCreateNewTask } from "./components/FormCreateNewTask/FormCreateNewTask";
import { ItemsList } from "./components/ItemsList/ItemsList";

import styles from "./App.module.css";
import "./global.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <FormCreateNewTask />
        </main>
      </div>
    </div>
  );
}
