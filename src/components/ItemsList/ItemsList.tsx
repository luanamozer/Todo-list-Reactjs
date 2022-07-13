import { Check, Trash } from "phosphor-react";
import { TasksProps } from "../../App";

import styles from "./ItemsList.module.css";

interface ItemListProps {
  contentTask: TasksProps;
  onDeleteTask: (taskToDelete: string) => void;
  onTaskCompleted: (taskId: string) => void;
}

export function ItemsList({
  contentTask,
  onDeleteTask,
  onTaskCompleted,
}: ItemListProps) {
  function handleDeleteTask() {
    onDeleteTask(contentTask.id);
  }

  function handleTaskCompleted() {
    onTaskCompleted(contentTask.id);
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.listTasks}>
          <div className={styles.task}>
            <button
              onClick={handleTaskCompleted}
              className={styles.checkContainer}
            >
              {contentTask.isCompleted ? <Check /> : <div />}
            </button>

            <p className={contentTask.isCompleted ? styles.textCompleted : ""}>
              {contentTask.name}
            </p>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
              <Trash size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
