import { ItemsList } from "../ItemsList/ItemsList";
import styles from "./Tasks.module.css";

import { TasksProps } from "../../App";
import { ClipboardText } from "phosphor-react";

interface ContentTasksProps {
  tasks: TasksProps[];
  onDeleteTask: (taskToDelete: string) => void;
  onTaskCompleted: (taskId: string) => void;
}

export function Tasks({
  tasks,
  onDeleteTask,
  onTaskCompleted,
}: ContentTasksProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (itemTask) => itemTask.isCompleted
  ).length;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.taskRecord}>
          <strong className={styles.createdTask}>
            Tarefas criadas {"  "}
            <span>{totalTasks}</span>
          </strong>

          <strong className={styles.tasksCompleted}>
            Concluídas {"  "}
            <span>
              {completedTasks} de {totalTasks}
            </span>
          </strong>
        </div>

        <div className={styles.listItems}>
          {tasks.map((contentTask) => (
            <ItemsList
              key={contentTask.id}
              contentTask={contentTask}
              onDeleteTask={onDeleteTask}
              onTaskCompleted={onTaskCompleted}
            />
          ))}

          {tasks.length <= 0 && (
            <section>
              <div className={styles.emptyList}>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
