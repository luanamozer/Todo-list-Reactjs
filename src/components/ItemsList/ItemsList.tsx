import { ClipboardText } from "phosphor-react";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./ItemsList.module.css";

export function ItemsList() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.taskRecord}>
          <strong className={styles.createdTask}>
            Tarefas criadas {"  "}
            <span>5</span>
          </strong>

          <strong className={styles.tasksCompleted}>
            Concluídas {"  "}
            <span>2 de 5</span>
          </strong>
        </div>

        <div className={styles.ListTasks}>
          <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    </div>
  );
}
