import { Check, CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <div>
      <div className={styles.task}>
        <Circle size={24} className={styles.circle} />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash size={24} cursor="pointer" />
      </div>
    </div>
  );
}
