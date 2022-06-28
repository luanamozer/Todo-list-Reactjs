import styles from "./FormCreateNewTask.module.css";
import Plus from "../../assets/plus.svg";

export function FormCreateNewTask() {
  return (
    <div>
      <form className={styles.createNewTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit" className={styles.btnCreate}>
          Criar
          <img src={Plus} alt="Adicionar item a lista" />
        </button>
      </form>
    </div>
  );
}
