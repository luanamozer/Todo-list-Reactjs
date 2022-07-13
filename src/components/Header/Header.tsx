import styles from "./Header.module.css";

import logoRocket from "../../assets/rocket.svg";
import Plus from "../../assets/plus.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface HeaderProps {
  onAddTask: (taskName: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTask);

    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório !");
  }

  const isNewTaskEmpty = newTask.length === 0;
  return (
    <>
      <header className={styles.header}>
        <img src={logoRocket} alt="Logo Todo-List" />
        <div className={styles.title}>
          <span>To-Do</span>
          {"  "}
          <span>List</span>
        </div>
      </header>
      <form onSubmit={handleCreateNewTask} className={styles.createNewTask}>
        <input
          name="comment"
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTask}
          onInvalid={handleNewTaskInvalid}
          autoComplete="off"
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
    </>
  );
}
