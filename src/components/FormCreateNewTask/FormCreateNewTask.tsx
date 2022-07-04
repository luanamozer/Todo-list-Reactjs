import { ItemsList } from "../ItemsList/ItemsList";
import styles from "./FormCreateNewTask.module.css";
import Plus from "../../assets/plus.svg";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function FormCreateNewTask() {
  const [listTasks, setListTasks] = useState(["Aprender React"]);

  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setListTasks([...listTasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório !");
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeleteOne = listTasks.filter((tasks) => {
      return tasks != taskToDelete;
    });

    setListTasks(taskWithoutDeleteOne);
  }

  const isNewTaskEmpty = newTask.length === 0;
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.createNewTask}>
        <input
          name="comment"
          type="text"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          autoComplete="off"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit"
          className={styles.btnCreate}
          disabled={isNewTaskEmpty}
        >
          Criar
          <img src={Plus} alt="Adicionar item a lista" />
        </button>
      </form>

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

        <div className={styles.listItems}>
          {listTasks.map((contentTasks) => {
            return (
              <ItemsList
                key={contentTasks}
                content={contentTasks}
                onDeleteTask={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
