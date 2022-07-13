import { FormEvent, useState } from "react";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

import styles from "./App.module.css";
import "./global.module.css";

export interface TasksProps {
  id: string;
  name: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  function addTask(taskName: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        name: taskName,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(taskWithoutDeleteOne);
  }

  function toggleTaskCompleted(taskId: string) {
    const listTasks = tasks.map((itemTask) => {
      if (itemTask.id === taskId) {
        return {
          ...itemTask,
          isCompleted: !itemTask.isCompleted,
        };
      }
      return itemTask;
    });
    setTasks(listTasks);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <div className={styles.wrapper}>
        <main>
          <Tasks
            tasks={tasks}
            onDeleteTask={deleteTask}
            onTaskCompleted={toggleTaskCompleted}
          />
        </main>
      </div>
    </div>
  );
}
