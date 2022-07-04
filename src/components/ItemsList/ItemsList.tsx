import { Circle, ClipboardText, Trash } from "phosphor-react";
import { FormCreateNewTask } from "../FormCreateNewTask/FormCreateNewTask";

import styles from "./ItemsList.module.css";

export function ItemsList({ content, onDeleteTask }) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.ListTasks}>
          {/* <div className={styles.emptyList} >
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> */}

          <div className={styles.task}>
            <Circle size={24} className={styles.circle} />
            <p>{content}</p>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
              <Trash size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
